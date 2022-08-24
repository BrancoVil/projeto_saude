import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, RefreshControl, FlatList } from 'react-native';
import AtendimentoItem from '../AtendimentoItem/AtendimentoItem';

export default function AtendimentoList({ route, navigation }) {

    const [id, setidCadPaciente] = useState(route.params?.id);
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);


    function viewAtendimento() {
        fetch('https://ivfassessoria.com/repositories/api/api/atendimento/read.php?idcadPacientes=' + route.params?.id, {
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



    useEffect(() => {
        viewAtendimento();
    }, [])

    const onRefresh = () => {
        setRefreshing(true);
        setDataSource([]);
        getData();
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="light" />
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.itemsContainer}>
                    {data.map(item => {
                        
                            return <AtendimentoItem key={item.idcadAtendimento} id={item.idcadAtendimento} pressaoarterial={item.pressaoarterial} glicemia={item.glicemia} dataatendimento={item.dataatendimento} localdeatedimento={item.localdeatedimento} sacolamedicamento={item.sacolamedicamento} navigation={navigation} />
                            
                       

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
