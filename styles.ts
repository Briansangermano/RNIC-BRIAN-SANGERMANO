import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#106b87',
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
      paddingTop: 10,
      paddingLeft: 15,
    },
    headerText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'Alkatra',
    },
    input: {
      height: 40,
      margin: 8,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#003f69',
      padding: 10,
      width: 300,
      backgroundColor: '#003f69',
      color: '#fff',
    },
    button: {
      borderWidth: 1,
      borderRadius: 10,
      width: 100,
      alignItems: 'center',
      borderColor: '#003f69',
      backgroundColor: '#003f69',
      margin: 10,
      padding: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
    }
});

export default styles;