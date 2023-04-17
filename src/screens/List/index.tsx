import React from 'react';
import { connect } from 'react-redux';
import {
  Platform,
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

const List = ({ navigation, tasks }) => {
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
            data={tasks}
            renderItem={({item}) => <Card card={item} navigation={navigation} />}
            keyExtractor={(i, index) => index.toString()}
            ListEmptyComponent={renderEmptyComponent}
          />
        </KeyboardAvoiding>
      </Wrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  const { tasks } = state.task
  return { tasks }
};

export default connect(mapStateToProps)(List);
