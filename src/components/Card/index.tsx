import React, {useState} from 'react';
import {
	Text,
	TouchableOpacity,
	View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';
const SquareIcon = require('../../assets/icons/square.svg').default;
const CheckSquareIcon = require('../../assets/icons/check-square.svg').default;
const TrashIcon = require('../../assets/icons/trash.svg').default;
const EditIcon = require('../../assets/icons/edit.svg').default;
const PersonImage = require('../../assets/images/person-icon.png');

const Card = ({card, deleteTask}) => {
	const {id, title, description, status, uri} = card;
  const [isDone, setIsDone] = useState(status);
  const onPressButton = () => setIsDone(!isDone);
  const [image, setImage] = useState<ImageSourcePropType>(uri || PersonImage)

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Image
            alt='Image'
            source={image}
            style={styles.image}
            onError={() => setImage(PersonImage)}
          />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.boldText}>{title}</Text>        
            <Text numberOfLines={3} style={styles.text}>{description}</Text>
          </View>
          <View>
            <View style={styles.statusText}>
              {isDone ? (
                <CheckSquareIcon stroke='green' />
              ) : (
                <SquareIcon stroke='#b73138' />
              )}
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.action} onPress={() => console.log("EDIT")}>
                <EditIcon stroke='#fff'/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action} onPress={() => deleteTask(id)}>
                <TrashIcon stroke='#fff'/>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
    </View>
  );
};

export default Card;