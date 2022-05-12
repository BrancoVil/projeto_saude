import { StyleSheet } from 'react-native' 


const styles = StyleSheet.create({
        container: {
          flex: 1, 
          backgroundColor: '#205DB8'
        },
        header: {
            flex: 2,
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
            paddingBottom: 90
        },
        footer: {
            flex: 3 ,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 30
        },
        text_header: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 40,
            textAlign:'center',
            paddingBottom:1
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
        actionError: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#FF0000',
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
            alignItems: 'center',
            marginTop: 50
        },
        signIn: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        },
        textSign: {
            fontSize: 35,
            fontWeight: 'bold',
            color:'#fff'
        }
      });

  export default styles
