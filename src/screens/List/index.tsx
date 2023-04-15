import React, { useEffect, useRef, useState } from 'react';
import {
  AppState,
  Keyboard,
  Platform,
  TextInput,
} from 'react-native';
import {
  Wrapper,
  KeyboardAvoiding,
  ContainerListCard,
  EmptyText,
  HeaderContainer,
  HeaderText,
  ViewContainer,
} from './styles';
import Card from '../../components/Card';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../constants/theme'
const Task1 = require('../../assets/images/taskicon1.png');
const Task2 = require('../../assets/images/taskicon2.png');
const Task3 = require('../../assets/images/taskicon3.png');

const List = ({ navigation }) => {
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
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      if (appState.current === 'background') setCards(tasks)
    });
    return () => subscription.remove();
  }, []);

  const renderEmptyComponent = () => (
    <ViewContainer>
      <EmptyText>Empty List...</EmptyText>
    </ViewContainer>
  );

  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <KeyboardAvoiding behavior={Platform.OS  === 'ios' ? 'padding' : 'undefined'}>
          <HeaderContainer>
            <HeaderText>Tasks</HeaderText>
          </HeaderContainer>
          <ContainerListCard
            data={cards}
            renderItem={({item}) => <Card card={item} navigation={navigation} />}
            keyExtractor={(i, index) => index.toString()}
            ListEmptyComponent={renderEmptyComponent}
          />
        </KeyboardAvoiding>
      </Wrapper>
    </ThemeProvider>
  );
};

export default List;
