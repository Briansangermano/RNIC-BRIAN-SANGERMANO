import React, { useEffect, useRef, useState } from 'react';
import {
  AppState,
  Keyboard,
  Platform,
  TextInput,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  Wrapper,
  KeyboardAvoiding,
  InputContainer,
  HeaderContainer,
  HeaderText,
  Input,
  Button,
  ButtonText,
} from './styles';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../constants/theme'
const Task1 = require('../../assets/images/taskicon1.png');
const Task2 = require('../../assets/images/taskicon2.png');
const Task3 = require('../../assets/images/taskicon3.png');

const List = () => {
  const titleRef = useRef<TextInput | null>(null)
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
  const [taskIdToEdit, setTaskIdToEdit] = useState<Number | null>(null);

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      if (appState.current === 'background') setCards(tasks)
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {});
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {});

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
          uri: null
        }
        setCards([...cards, newCard]);
      }
      setNewTitle('');
      setNewDescription('');
      setIsEditingMode(false);
      setTaskIdToEdit(null);
    }
  }

  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <KeyboardAvoiding behavior={Platform.OS  === 'ios' ? 'padding' : 'undefined'}>
          <HeaderContainer>
            <HeaderText>Edit Task</HeaderText>
          </HeaderContainer>
          <InputContainer>
            <Input
              value={newTitle}
              placeholder="Title"
              returnKeyType="next"
              placeholderTextColor={myTheme.colors.grey}
              onSubmitEditing={() => titleRef?.current?.focus()}
              onChangeText={(value) => setNewTitle(value)}
            />
            <Input
              placeholder="Description"
              value={newDescription}
              ref={titleRef}
              placeholderTextColor={myTheme.colors.grey}
              onChangeText={(value) => setNewDescription(value)}
              onSubmitEditing={Keyboard.dismiss}
            />
            <Button onPress={onPressButton}>
              <ButtonText>{isEditingMode ? 'Edit Task' : 'Add Task'}</ButtonText>
            </Button>
          </InputContainer>
        </KeyboardAvoiding>
      </Wrapper>
    </ThemeProvider>
  );
};

export default List;
