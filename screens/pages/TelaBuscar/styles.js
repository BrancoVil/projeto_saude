import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  textinput: {
    borderWidth: 0,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingLeft: 40,
    marginTop: 70,
    width: '100%',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 0,
    backgroundColor: '#b55031',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 50,
    marginTop: 11,
    alignSelf: 'center',
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

});

export default styles
