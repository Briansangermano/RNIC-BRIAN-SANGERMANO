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
import { removeTask, editTask } from '../../redux/actions';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../constants/theme'

const EditTask = ({ selectedTask, navigation }) => {
  const titleRef = useRef<TextInput | null>(null);
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState<string | undefined>(selectedTask?.title);
  const [newDescription, setNewDescription] = useState<string | undefined>(selectedTask?.description);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {});
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {});

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const editTaskButton = () => {
    if (newTitle && newDescription) {
      dispatch(editTask({id: selectedTask.id, title: newTitle, description: newDescription}));
      setNewTitle('');
      setNewDescription('');
      navigation.canGoBack() && navigation.goBack();
    }
  }

  const removeTaskButton = () => {
    dispatch(removeTask(selectedTask.id));
    navigation.canGoBack() && navigation.goBack();
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
            <Button onPress={editTaskButton}>
              <ButtonText>Edit Task</ButtonText>
            </Button>
            <Button onPress={removeTaskButton}>
              <ButtonText>Remove Task</ButtonText>
            </Button>
          </InputContainer>
        </KeyboardAvoiding>
      </Wrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  const { tasks, selectedTask } = state.task
  return { tasks, selectedTask }
};

export default connect(mapStateToProps)(EditTask);
