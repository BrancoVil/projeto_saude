import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({
      signIn: {
        width: '80%',
        height: 50,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor:'#4ea3fd',
        marginTop:40
      },
      cardform:{
        height: 500,
        alignSelf:'center',
        marginTop: 50,
        backgroundColor:'#fdfdfd',
        borderRadius:10,
        width:'90%',
        shadowColor: "#666",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1},
        elevation:4,
        marginBottom:10,
        paddingTop:50,
        paddingHorizontal:15,
      },
  });

export default styles