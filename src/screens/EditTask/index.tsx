import React, { useEffect, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
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
  ContainerButtons,
} from './styles';
import { removeTask, editTask, checkTask } from '../../redux/actions';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../constants/theme'
const BackArrow = require('../../assets/icons/arrowLeft.svg').default;
const EditIcon = require('../../assets/icons/edit.svg').default;
const TrashIcon = require('../../assets/icons/trash.svg').default;
const CheckIcon = require('../../assets/icons/check-square.svg').default;
const SquareIcon = require('../../assets/icons/square.svg').default;

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

  const checkTaskButton = () => {
    dispatch(checkTask(selectedTask.id));
    navigation.canGoBack() && navigation.goBack();
  };

  const editTaskButton = () => {
    if (newTitle && newDescription) {
      dispatch(editTask({id: selectedTask.id, title: newTitle, description: newDescription}));
      setNewTitle('');
      setNewDescription('');
      navigation.canGoBack() && navigation.goBack();
    }
  };

  const removeTaskButton = () => {
    dispatch(removeTask(selectedTask.id));
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <KeyboardAvoiding behavior={Platform.OS  === 'ios' ? 'padding' : 'undefined'}>
          <HeaderContainer>
            <TouchableOpacity onPress={()=> navigation.canGoBack() && navigation.goBack()}>
              <BackArrow stroke={'#fff'} />
            </TouchableOpacity>
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
            <ContainerButtons>
              <Button onPress={checkTaskButton}>
                {selectedTask.status ? (
                  <SquareIcon stroke={myTheme.colors.white} />
                  ) : (
                  <CheckIcon stroke={myTheme.colors.white} />
                )}
              </Button>
              <Button onPress={editTaskButton}>
                <EditIcon stroke={'#fff'} />
              </Button>
              <Button onPress={removeTaskButton}>
                <TrashIcon stroke={'#fff'} />
              </Button>
            </ContainerButtons>
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
