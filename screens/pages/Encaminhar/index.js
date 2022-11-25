import React, { Component, useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    ScrollView,
    Text,
} from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";


function TelaEncaminhar({ route }) {

    const navigation = useNavigation();
    const [data, setData] = useState([]);

    const Atendimento = async () => {
        fetch('https://ivfassessoria.com/repositories/api/api/atendimento/readone.php?idcadAtendimento=' + route.params?.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((responseJson) => (
                item = [responseJson],
                setData(item)
            ));

    }

    useEffect(() => {
        Atendimento();
    }, [])


    return (

        <ScrollView style={styles.container}>
            {Object.values(data.map(item => (
                <View key={item.idcadAtendimento}>

                    <View style={styles.container}>
                        <View style={styles.atendimeto}>
                            <Text style={styles.atendimentotitle}>Número do Atendimento: </Text>
                            <Text style={styles.id}>{item.idcadAtendimento}</Text>
                        </View>
                        <Text>{item.dataatendimento}</Text>
                        <View style={styles.dadospaciente}>
                            <Text style={styles.title}>Paciente</Text>
                            <View style={styles.itemnomepaciente}>
                                <Text style={styles.itemtitulo}>Nome Completo: </Text>
                                <Text>{item.nomePacientes}</Text>
                            </View>
                            <View style={styles.itemdocpaciente}>
                                <View>
                                    <Text style={styles.itemtitulo}>CPF: </Text>
                                    <Text>{item.cpf}</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemtitulo}>SUS: </Text>
                                    <Text>{item.cartaoSus}</Text>
                                </View>
                            </View>

                            <View>
                                <Text style={styles.itemtitulo}>Endereço: </Text>
                                <Text>{item.endereco}</Text>
                            </View>

                        </View>

                        <Text style={styles.title}>Dados</Text>
                        <View style={styles.balancodados}>

                            <View style={styles.dados}>
                                <Text style={styles.titulodados}>Pressão Artirial</Text>
                                <Text style={styles.itemdados}>{item.pressaoarterial}</Text>
                            </View>
                            <View style={styles.dados}>
                                <Text style={styles.titulodados}>Glicemia</Text>
                                <Text style={styles.itemdados}>{item.glicemia}</Text>
                            </View>

                        </View>
                        <View>
                            <Text style={styles.title}>Local de Atendimento</Text>
                            <Text>{item.localdeatedimento}</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Uso Continuo</Text>
                            <Text>{item.sacolamedicamento}</Text>
                        </View>




                    </View>



                </View>
            )))}







        </ScrollView>

    )
}

export default TelaEncaminhar
