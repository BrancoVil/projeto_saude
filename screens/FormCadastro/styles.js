import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({
      footer: {
          flex:1,
          backgroundColor: '#fff',
          paddingHorizontal: 10,
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
      textInput: {
          flex: 1,
          color: '#000',
          fontSize:20,
          borderRadius:15,
          borderColor:'black',
          borderWidth:1
      },
      button: {
          alignItems: 'center',
          marginTop: 50
      },
      signIn: {
          width: '75%',
          height: 100,
          alignItems: 'center',
          alignSelf:'center',
          justifyContent:'center',
          borderRadius: 12,          
      },
      textSign: {
          fontSize: 35,
          fontWeight: 'bold',
          color:'white',
      },
      gradient:{
          paddingTop:20

      }
  });

export default styles