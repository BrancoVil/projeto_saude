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
                size={20}
            />
            <View style={styles.titulo}>
                <Text style={styles.textNome}>Atendimento N°: {props.id}</Text>
                <Text style={styles.textNome}>{props.dataatendimento}</Text>
                {/* <Text style={styles.textItem}>Pressão Aterial: {props.pressaoarterial}</Text>
                <Text style={styles.textItem}>Glicemia: {props.glicemia}</Text> */}
                <Text style={styles.textItem}>Local de Atedimento: {props.localdeatedimento}</Text>
                {/* <Text style={styles.textItem}>Medicamentos: {props.sacolamedicamento}</Text> */}

            </View>

            <View style={styles.buttonsContainer}>

                <TouchableOpacity style={styles.editButton} >
                    <Text>
                        <Feather
                            style={styles.icon}
                            name="share-2"
                            size={20}
                            onPress={() => navigationEdit.navigate('Encaminhar', {
                                cpf: props.id
        
                            })}
                        />
                    </Text>

                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 250, 0.5)',
        marginTop: 2,
        
        
        

    },
    titulo: {
        width: '80%'

    },
    buttonsContainer: {
        width: '15%',
        alignContent: 'flex-end'
    },
    icon: {
        width: '5%',
        color: '#ffb246',

        
    },
    editButton: {
        height: 30,
        padding: 5,
        flexGrow:1
        
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