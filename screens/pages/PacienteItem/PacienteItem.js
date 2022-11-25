import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function PacienteItem(props) {

    const navigationEdit = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigationEdit.navigate('TelaPaciente', {
            cpf: props.cpf

        })}>
            <Feather
                style={styles.icon}
                name="user"
                size={30}
            />
            <View style={styles.titulo}>
                <Text style={styles.textNome}>{props.nome}</Text>
                <Text style={styles.textItem}>CPF: {props.cpf}</Text>
                <Text style={styles.textItem}>Sus: {props.sus}</Text>

            </View>

            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 5,
        
        backgroundColor: '#fff',
        marginBottom: 5,
        justifyContent:'flex-start',
        alignItems:'center'




    },
    titulo: {
        width: '70%'

    },
    buttonsContainer: {
        width: '20%',

    },
    icon: {
        width: '10%',
        color: '#ffb246'
    },
    editButton: {
        marginLeft: 5,
        height: 30,
        backgroundColor: '#b55031',
        borderRadius: 5,
        padding: 5,
        fontSize: 5,
        elevation: 10,
        shadowOpacity: 5,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '400',
    },
    textItem: {
        fontSize: 10,
        marginTop: 1
    },
    textNome: {
        fontSize: 14,
        fontWeight: '500'
    }
});