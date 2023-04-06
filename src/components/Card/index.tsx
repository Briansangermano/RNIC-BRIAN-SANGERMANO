import React, {useState} from 'react';
import { View } from 'react-native';
import {
  Wrapper,
  Button,
  BoldText,
  SimpleText,
  TextContainer,
  StatusView,
  Image,
  ActionButtonsContainer,
  ActionButton,
} from './styles';
import { useTheme } from 'styled-components'
const SquareIcon = require('../../assets/icons/square.svg').default;
const CheckSquareIcon = require('../../assets/icons/check-square.svg').default;
const TrashIcon = require('../../assets/icons/trash.svg').default;
const EditIcon = require('../../assets/icons/edit.svg').default;
const PersonImage = require('../../assets/images/person-icon.png');

const Card = ({card, deleteTask, editCard}) => {
  const theme = useTheme()
	const {id, title, description, status, uri} = card;
  const [isDone, setIsDone] = useState(status);
  const onPressButton = () => setIsDone(!isDone);

  return (
    <Wrapper>
        <Button onPress={onPressButton}>
          <Image source={uri || PersonImage}/>
          <TextContainer>
            <BoldText numberOfLines={1}>{title}</BoldText>        
            <SimpleText numberOfLines={3}>{description}</SimpleText>
          </TextContainer>
          <View>
            <StatusView>
              {isDone ? (
                <CheckSquareIcon stroke={theme.colors.green} />
              ) : (
                <SquareIcon stroke={theme.colors.red} />
              )}
            </StatusView>
            <ActionButtonsContainer>
              <ActionButton onPress={() => editCard(id, title, description)}>
                <EditIcon stroke={theme.colors.white}/>
              </ActionButton>
              <ActionButton onPress={() => deleteTask(id)}>
                <TrashIcon stroke={theme.colors.white}/>
              </ActionButton>
            </ActionButtonsContainer>
          </View>
        </Button>
    </Wrapper>
  );
};

export default Card;