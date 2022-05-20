import { StyleSheet } from 'react-native' 


const styles = StyleSheet.create({
        container: { 
            
          
        },
        header: {
            justifyContent: 'center',
        },
        footer: {
            backgroundColor: '#f2f2f2',
            paddingHorizontal: 20,
            paddingVertical: 40,
            height:420,
        },
        text_header: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 40,
            textAlign:'center',
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
            marginTop: Platform.OS === 'ios' ? 0 : -12,
            paddingLeft: 10,
            color: '#000',
        },
        button: {
            paddingHorizontal:30,
            paddingTop:30
        },
        signIn: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor:'#4ea3fd',
        },
        signIn1: {
            width:'100%',
            height:50,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:2,
            borderRadius:30,
            borderColor:'#4ea3fd',
            marginTop:20,
        },
        textSign: {
            fontSize: 20,
            fontWeight: 'bold',
            color:'#fff'
        },
        img: {
            alignSelf:'center',
            height: 150,
            width:150
        },
        gradient_header : {
            paddingTop:120,
            height:350,
            borderBottomRightRadius:90,
            borderBottomLeftRadius:90,
            
        }
      });

  export default styles
