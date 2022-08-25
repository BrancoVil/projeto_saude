import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        flexDirection:'column',
        padding: 10

    },
    title: {
        color: '#4d3d00',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        borderBottomColor: '#4d3d00',
        borderBottomWidth: 1,

    },
    label: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5

    },
    inputContainer: {
        flex: 1,
        marginTop: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch'

    },
    input: {
        marginTop: 5,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 12,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        height: 50,
        backgroundColor: '#b55031',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
        paddingLeft:'10%',
        paddingRight:'10%',
        borderRadius:5,
        shadowOpacity: 15,

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    bottomtab: {
        flex: 3,
        width: '100%',
        height: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    }
});
export default styles
