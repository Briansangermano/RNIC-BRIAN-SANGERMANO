/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AppState,
  Keyboard,
  Platform,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
const Task1 = require('./src/assets/images/taskicon1.png');
const Task2 = require('./src/assets/images/taskicon2.png');
const Task3 = require('./src/assets/images/taskicon3.png');


import Card from './src/components/Card';
import styles from './styles';

const App = () => {
  const lastNameRef = useRef();
  const tasks = [
    {
      id: 1,
      title: 'First Item',
      description: 'Description data to show description data to show',
      status: false,
      uri: Task1
    },
    {
      id: 2,
      title: 'Second Item',
      description: 'Description data to show',
      status: false,
      uri: Task2
    },
    {
      id: 3,
      title: 'Third Item',
      description: 'Description data to show',
      status: false,
      uri: Task3
    },
  ];
  const [cards, setCards] = useState(tasks);
  const [newTitle, setNewTitle] = useState<string | undefined>('');
  const [newDescription, setNewDescription] = useState<string | undefined>('');
  const [isEditingMode, setIsEditingMode] = useState<Boolean>(false);
  const [taskIdToEdit, setTaskIdToEdit] = useState<Number>(null);

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    RNBootSplash.hide({ fade: true, duration: 500 });
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      if (appState.current === 'background') setCards(tasks)
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow');
    const hideSubscription = Keyboard.addListener('keyboardDidHide');

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onPressButton = () => {
    if (newTitle && newDescription) {
      if (isEditingMode) {
        cards.map(i => {
          if (i.id === taskIdToEdit) {
            i.title = newTitle;
            i.description = newDescription;
          };
        })
      } else {
        const newCard = {
          id: cards.length + 1,
          title: newTitle,
          description: newDescription,
          status: false,
        }
        setCards([...cards, newCard]);
      }
      setNewTitle('');
      setNewDescription('');
      setIsEditingMode(false);
      setTaskIdToEdit(null);
    }
  }

  const deleteTask = (taskId) => {
    const deletedCard = cards.filter(i => i.id !== taskId)
    setCards(deletedCard)
  }

  const editCard = (id, title, description) => {
    setTaskIdToEdit(id)
    setIsEditingMode(true);
    setNewTitle(title);
    setNewDescription(description);
  }

  const renderEmptyComponent = () => (
    <View style={styles.viewContainer}>
      <Text style={styles.emptyText}>Empty List...</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS  === 'ios' ? 'padding' : 'undefined'} style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Tasks</Text>
        </View>
        <FlatList
          data={cards}
          renderItem={({item}) => <Card card={item} deleteTask={deleteTask} editCard={editCard} />}
          keyExtractor={(i, index) => index}
          ListEmptyComponent={renderEmptyComponent}
          style={styles.flatListContainer}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newTitle}
            placeholder="Title"
            returnKeyType="next"
            placeholderTextColor='#e2e2e2'
            onSubmitEditing={() => lastNameRef.current.focus()}
            onChangeText={(value) => setNewTitle(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={newDescription}
            ref={lastNameRef}
            placeholderTextColor='#e2e2e2'
            onChangeText={(value) => setNewDescription(value)}
            onSubmitEditing={Keyboard.dismiss}
          />
          <TouchableOpacity style={styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>{isEditingMode ? 'Edit Task' : 'Add Task'}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
