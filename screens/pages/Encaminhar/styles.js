import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        marginStart: 5,
        marginEnd: 5,
    },

    atendimeto: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff333',
        borderRadius: 23,


    },
    atendimentotitle: {
        fontSize: 16,
        fontWeight: '600'
    },
    id: {
        fontSize: 16,
        fontWeight: '600'
    },
    dadospaciente: {

        marginBottom: 15
    },
    title: {
        color: '#4d3d00',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        borderBottomColor: '#4d3d00',
        borderBottomWidth: 1,

    },
    itemnomepaciente: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    itemtitulo: {
        fontWeight: '600',
        marginRight: 5
    },
    itemdocpaciente: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    balancodados: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 13,
        
    },
    dados: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    titulodados: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#d4d4d4',
        marginBottom: 5
    },
    itemdados: {
        fontSize: 30,
        fontWeight: 'bold',

    },

});
export default styles
