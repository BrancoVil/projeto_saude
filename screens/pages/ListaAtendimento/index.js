import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
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

    

    // useEffect(() => {
    //     viewAtendimento();
    // }, [])

    useFocusEffect(
        React.useCallback(() => {
            viewAtendimento();
        }, [])
      );

    if (data) {
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
    } else {
        return(
            <Text>Não há dados!</Text>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart:2,
        marginEnd:2
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    
    itemsContainer: {
        flex: 1,
        marginTop: 1,
        padding: 1,
        alignItems: 'stretch',

    },
});
