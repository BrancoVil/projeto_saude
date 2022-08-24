import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',

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
        width: '99%',
        padding: 10,
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
        height: 40,
        backgroundColor: 'blue',
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowOpacity: 20,
        
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    bottomtab: {
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        
        flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'space-around',
        
    }
});
export default styles
