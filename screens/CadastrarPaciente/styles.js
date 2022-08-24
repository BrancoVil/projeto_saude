import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#EFEFEF',

  },
  title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
  },
  label: {
      color: '#000',
      fontSize: 12,
      fontWeight: '400',
      marginTop: 5

  },
  inputContainer: {
      flex: 1,
      marginTop: 5,
      width: '99%',
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch'

  },
  input: {
      marginTop: 5,
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: 12,
      fontSize: 16,
      alignItems: 'stretch'
  },
  button: {
      marginTop: 10,
      height: 40,
      backgroundColor: 'blue',
      borderRadius: 5,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#ccc',
  },
  buttonText: {
      color: '#fff',
      fontWeight: 'bold',
  }
});
export default styles