import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({
      footer: {
          flex:1,
          backgroundColor: '#f2f2f2',
          paddingHorizontal: 0,
          marginTop:20
      },
      text_footer: {
          color: '#000',
          fontSize:25,
          alignSelf:'center',
          paddingBottom:20,
          paddingTop:20
          
        },
      action: {
          flexDirection:'center',
          marginTop: 10,
          borderBottomWidth: 1,
          borderTopWidth:1,
          borderBottomColor: '#205DB8',
          paddingBottom: 10
      },
      button: {
          alignItems: 'center',
          marginTop: 50
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
      textSign: {
          fontSize: 35,
          fontWeight: 'bold',
          color:'white',
      },
      gradient:{
          paddingTop:20

      },
      cardform:{
        height: 560,
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
      }
  });

export default styles