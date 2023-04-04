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

import Card from './src/components/Card';
import styles from './styles';

const App = () => {
  const lastNameRef = useRef();
  const tasks = [
    {
      title: 'First Item',
      description: 'Description data to show',
      status: false,
    },
    {
      title: 'Second Item',
      description: 'Description data to show',
      status: false,
    },
    {
      title: 'Third Item',
      description: 'Description data to show',
      status: false,
    },
  ];
  const [cards, setCards] = useState(tasks);
  const [newTitle, setNewTitle] = useState<string | undefined>('');
  const [newDescription, setNewDescription] = useState<string | undefined>('');

  const appState = useRef(AppState.currentState);

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
      const newCard = {
        title: newTitle,
        description: newDescription,
        status: false,
      }
      setCards([...cards, newCard]);
      setNewTitle('');
      setNewDescription('');
    }
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
          renderItem={({item}) => <Card card={item} />}
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
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
