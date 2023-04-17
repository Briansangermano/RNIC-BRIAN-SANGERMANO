import React, { useEffect, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Keyboard,
  Platform,
  TextInput,
} from 'react-native';
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
import { addTask } from '../../redux/actions';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../constants/theme'

const AddTask = ({ navigation, tasks }) => {
  const titleRef = useRef<TextInput | null>(null)
  const [newTitle, setNewTitle] = useState<string | undefined>('');
  const [newDescription, setNewDescription] = useState<string | undefined>('');

  const dispatch = useDispatch();

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
      const newCard = {
        id: tasks.length + 1,
        title: newTitle,
        description: newDescription,
        status: false,
        uri: null
      }
      dispatch(addTask(newCard));
      setNewTitle('');
      setNewDescription('');
      navigation.canGoBack() && navigation.goBack();
    }
  }

  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <KeyboardAvoiding behavior={Platform.OS  === 'ios' ? 'padding' : 'undefined'}>
          <HeaderContainer>
            <HeaderText>Add Task</HeaderText>
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
              <ButtonText>Add Task</ButtonText>
            </Button>
          </InputContainer>
        </KeyboardAvoiding>
      </Wrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  const { tasks } = state.task
  return { tasks }
};

export default connect(mapStateToProps)(AddTask);
