import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {
  Wrapper,
  Button,
  BoldText,
  SimpleText,
  TextContainer,
  StatusView,
  Image,
} from './styles';
import { selectTask } from '../../redux/actions';
import { Routes } from '../../types/enums/routes';
import { useTheme } from 'styled-components'
const SquareIcon = require('../../assets/icons/square.svg').default;
const CheckSquareIcon = require('../../assets/icons/check-square.svg').default;
const PersonImage = require('../../assets/images/person-icon.png');

const Card = ({card, navigation}) => {
  const dispatch = useDispatch();
  const theme = useTheme()
	const {id, title, description, status, uri} = card;
  
  const onPressButton = () => {
    dispatch(selectTask(id));
    navigation.navigate(Routes.EditTask)
  };

  return (
    <Wrapper>
        <Button onPress={onPressButton}>
          <Image source={uri || PersonImage}/>
          <TextContainer>
            <BoldText numberOfLines={1}>{title}</BoldText>        
            <SimpleText numberOfLines={3}>{description}</SimpleText>
          </TextContainer>
          <StatusView>
            {status ? (
              <CheckSquareIcon stroke={theme.colors.green} />
            ) : (
              <SquareIcon stroke={theme.colors.red} />
            )}
          </StatusView>
        </Button>
    </Wrapper>
  );
};

export default Card;