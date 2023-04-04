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
        <View style={styles.textContainer}>
			<Text numberOfLines={1}>
        <Text style={styles.boldText}>Title: </Text>
        {title}
      </Text>
		</View>
		<View style={styles.textContainer}>
      <Text numberOfLines={3}>
        <Text style={styles.boldText}>Description: </Text>
        {description}
      </Text>
			</View>
			<View style={styles.statusText}>
				{isDone ? (
					<Text style={styles.textDone}>Done</Text>
				) : (
					<Text style={styles.textNotDone}>ToDo</Text>
				)}
			</View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;