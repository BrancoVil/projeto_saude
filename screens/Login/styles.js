import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignContent: 'center',

    },
    header: {
        justifyContent: 'center',
    },
    image: {
        flex: 2,
        justifyContent: "center"
    },
    footer: {
        flex: 3,
        backgroundColor: 'rgba(255, 255, 212, 0.2)',
        paddingHorizontal: 20,
        margin: 5,
        marginTop: 320,
        alignContent: 'center',
        borderRadius: 10
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',

    },
    text_footer: {
        color: '#000',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#111',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#000',
    },
    button: {
        padding: 20,

    },
    signIn: {
        width: '80%',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#ffb246',
        flexDirection: 'row',
        marginTop: 10

    },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    img: {
        top: 10,
        alignSelf: 'center',
        height: 80,
        width: 130,

    },
    gradient_header: {
        height: 180,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,

    }
});

export default styles
