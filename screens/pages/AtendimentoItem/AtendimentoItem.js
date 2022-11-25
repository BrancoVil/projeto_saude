import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function AtendimentoItem(props) {

    const navigationEdit = useNavigation();




    return (
        <TouchableOpacity style={styles.container} onPress={() => navigationEdit.navigate('Encaminhar', {
            id: props.id

        })}>
            <Feather
                style={styles.icon}
                name="user-check"
                size={30}
            />
            <View style={styles.titulo}>
                <Text style={styles.textNome}>Atendimento N°: {props.id}</Text>
                <Text style={styles.textNome}>{props.dataatendimento}</Text>
                {/* <Text style={styles.textItem}>Pressão Aterial: {props.pressaoarterial}</Text>
                <Text style={styles.textItem}>Glicemia: {props.glicemia}</Text> */}
                <Text style={styles.textItem}>Local de Atedimento: {props.localdeatedimento}</Text>
                {/* <Text style={styles.textItem}>Medicamentos: {props.sacolamedicamento}</Text> */}

            </View>
           


        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        shadowColor: "#000",
        backgroundColor: '#fff',
        marginBottom: 2,
        
    },
    titulo: {
        fontSize:15,
        width: '60%',
        marginTop: 5,
        marginBottom: 5

    },
    icon: {
        color: '#ffb246',
        alignSelf:'center',
        justifyContent:'center',
        marginRight:12

        


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