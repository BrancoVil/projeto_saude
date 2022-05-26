import { StyleSheet } from 'react-native' 


const styles = StyleSheet.create({
        container: { 
            backgroundColor: '#f2f2f2',
            
          
        },
        header: {
            justifyContent: 'center',
        },
        footer: {
            backgroundColor: '#f2f2f2',
            paddingHorizontal: 60,
            paddingVertical: 40,
            height:400,
            marginTop:100
        },
        text_header: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30,
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
            paddingTop:30,
        },
        signIn: {
            width: '80%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor:'#4ea3fd',
            flexDirection:'row',
            
        },
        textSign: {
            fontSize: 20,
            fontWeight: 'bold',
            color:'#fff',
        },
        img: {
            alignSelf:'center',
            height: 198,
            width:200
        },
        gradient_header : {
            height:250,
            borderBottomRightRadius:90,
            borderBottomLeftRadius:90,
            
        }
      });

  export default styles
