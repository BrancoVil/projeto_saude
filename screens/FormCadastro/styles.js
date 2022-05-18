import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({
      footer: {
          flex:1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 10,
          paddingVertical: 20,
          paddingTop:50
      },
      text_footer: {
          color: '#000',
          fontSize:25,
          alignSelf:'center',
          
        },
      action: {
          flexDirection:'row-reverse',
          marginTop: 3,
          borderBottomWidth: 1,
          borderBottomColor: '#205DB8',
          paddingBottom: 3
      },
      textInput: {
          flex: 1,
          textAlign:'center',
          color: '#000',
          fontSize:20
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
          paddingTop:100
      }
  });

export default styles