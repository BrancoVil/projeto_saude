import { StyleSheet } from 'react-native' 


const styles = StyleSheet.create({
        container: { 
          backgroundColor: '#ffcc33'
        },
        header: {
            flex: 2,
            justifyContent: 'center',
        },
        footer: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 40,
            height:450
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
            borderBottomColor: '#f2f2f2',
            paddingBottom: 5
        },
        textInput: {
            flex: 1,
            marginTop: Platform.OS === 'ios' ? 0 : -12,
            paddingLeft: 10,
            color: '#000',
        },
        errorMsg: {
            color: '#FF0000',
            fontSize: 14,
        },
        button: {
            paddingHorizontal:30,
            paddingTop:50
        },
        button1 :{
        
        },
        signIn: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor:'#ffcc33',
        },
        textSign: {
            fontSize: 20,
            fontWeight: 'bold',
            color:'#fff'
        },
        img: {
            alignSelf:'center',
            height: 110
        },
        gradient_header : {
            paddingTop:200,
            height:450
        }
      });

  export default styles
