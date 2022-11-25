import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView, RefreshControl, FlatList } from 'react-native';
import AppItem from '../PacienteItem/PacienteItem';

export default function AppList({ route, navigation }) {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);


    function viewPaciente() {
        fetch('https://ivfassessoria.com/repositories/api/api/paciente/read.php', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson.body);
                setRefreshing(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }


   

    useFocusEffect(
        React.useCallback(() => {
            viewPaciente();
        }, [])
      );
    

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="light" />
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.itemsContainer}>
                    {data.map(item => {
                        return <AppItem key={item.idcadPacientes} id={item.idcadPacientes} nome={item.nomePacientes} cpf={item.cpf} sus={item.cartaoSus} endereco={item.endereco} telefone={item.telefone} postoAtendimento={item.postoAtendimento} dataNascimento={item.dataNascimento} navigation={navigation} />
                    })}

                </ScrollView>
              

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.81)',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    scrollContainer: {
        flex: 1,
        width: '100%'
    },
    itemsContainer: {
        flex: 1,
        marginTop: 1,
        padding: 5,
        alignItems: 'stretch',

    },
});
