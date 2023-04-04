import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: Platform.OS === 'ios' ? 'steelblue' : '#209cd8',
    },
    container: {
      flex: 1,
    },
    flatListContainer: {
      flex: 1,
      width: '100%',
    },
    viewContainer: {
      alignItems: 'center',
      paddingTop: 200
    },
    emptyText: {
      fontSize: 25,
      color: 'white',
    },
    inputContainer: {
      alignItems: 'center',
      marginTop: 15,
    },
    headerContainer: {
      padding: 10,
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    input: {
      height: 40,
      margin: 8,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: Platform.OS === 'ios' ? 'skyblue' : '#006a9c',
      padding: 10,
      width: 300,
      color: '#fff',
    },
    button: {
      borderWidth: 1,
      borderRadius: 10,
      width: 100,
      alignItems: 'center',
      borderColor: Platform.OS === 'ios' ? 'skyblue' : '#006a9c',
      backgroundColor: Platform.OS === 'ios' ? 'skyblue' : '#006a9c',
      margin: 10,
      padding: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
    }
});

export default styles;