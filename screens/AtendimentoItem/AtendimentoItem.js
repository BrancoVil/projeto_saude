import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function AtendimentoItem(props) {

    const navigationEdit = useNavigation();




    return (
        <View style={styles.container}>
            <Feather
                style={styles.icon}
                name="user-check"
                size={25}
            />
            <View style={styles.titulo}>
                <Text style={styles.textNome}>Atendimento N°: {props.id}</Text>
                <Text style={styles.textNome}>{props.dataatendimento}</Text>
                {/* <Text style={styles.textItem}>Pressão Aterial: {props.pressaoarterial}</Text>
                <Text style={styles.textItem}>Glicemia: {props.glicemia}</Text> */}
                <Text style={styles.textItem}>Local de Atedimento: {props.localdeatedimento}</Text>
                {/* <Text style={styles.textItem}>Medicamentos: {props.sacolamedicamento}</Text> */}

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.00,

        elevation: 1,
        backgroundColor: '#fff',
        marginBottom: 2




    },
    titulo: {
        width: '85%',
        marginTop: 5,
        marginBottom: 5


    },
    icon: {
        width: '15%',
        color: '#ffb246',
        alignSelf: 'center',
        paddingLeft: 15


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