import { StyleSheet } from 'react-native' 


const styles = StyleSheet.create({
        container: { 
            backgroundColor: 'white',
            alignContent:'center',
          
        },
        header: {
            justifyContent: 'center',
        },
        footer: {
            backgroundColor: 'white',
            paddingHorizontal: 50,
            height:340,
            marginTop:100,
            alignContent:'center'
        },
        text_header: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30,
            textAlign:'center',
            marginTop:20
        },
        text_footer: {
            color: '#000',
            fontSize: 18
        },
        action: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#b3b3b3',
            paddingBottom: 5
        },
        textInput: {
            flex: 1,
            paddingLeft: 10,
            color: '#000',
        },
        button: {
            paddingTop:30,
        },
        signIn: {
            width: '80%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor:'#ffb246',
            flexDirection:'row',
            
        },
        textSign: {
            fontSize: 20,
            fontWeight: 'bold',
            color:'#fff',
        },
        img: {
            alignSelf:'center',
            height: 120,
            width:190,
            marginTop:80
        },
        gradient_header : {
            height:250,
            borderBottomRightRadius:90,
            borderBottomLeftRadius:90,
            
        }
      });

  export default styles
