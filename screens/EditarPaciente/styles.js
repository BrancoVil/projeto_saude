import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({
      footer: {
          flex:1,
          backgroundColor: '#f2f2f2',
          paddingHorizontal: 0,
      },
      signIn: {
        width: '80%',
        height: 50,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor:'#ffb246',
        marginTop:30
      },
      cardform:{
        height: 570,
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
        paddingTop:20,
        paddingHorizontal:15,
      }
  });

export default styles