import React, {useState} from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';

const Card = ({card}) => {
	const {title, description, status} = card;
  const [isDone, setIsDone] = useState(status);
  const onPressButton = () => setIsDone(!isDone);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text numberOfLines={1} style={styles.boldText}>{title}</Text>        
          <Text numberOfLines={3} style={styles.text}>{description}</Text>
          <View style={styles.statusText}>
            {isDone ? (
              <Text style={styles.textDone}>DONE</Text>
            ) : (
              <Text style={styles.textNotDone}>TODO</Text>
            )}
          </View>
        </TouchableOpacity>
    </View>
  );
};

export default Card;