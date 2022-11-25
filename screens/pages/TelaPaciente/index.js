import React, { Component, useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

const FormCadastro = props => {
    props.navigation.navigate('FormCadastro')
}

const ConsultaPaciente = props => {
    props.navigation.navigate('ConsultaPaciente')
}


function TelaPaciente({ route }) {

    const navigation = useNavigation();
    const [data, setData] = useState([]);

    singleViewPaciente = async () => {
        fetch('https://ivfassessoria.com/repositories/api/api/paciente/readone.php?cpf=' + route.params?.cpf, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((responseJson) => (
                paciente = [responseJson],
                setData(paciente)
            ));
    }



    useFocusEffect(
        React.useCallback(() => {
            singleViewPaciente();
        }, [])
      );

    return (

        <ScrollView >
            {Object.values(data.map(paciente => (
                <View style={styles.container} key={paciente.idcadPacientes}>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome Completo</Text>
                        <Text style={styles.input}>{paciente.nomePacientes}</Text>
                        <Text style={styles.label}>CPF</Text>
                        <Text style={styles.input}>{paciente.cpf}</Text>
                        <Text style={styles.label}>SUS</Text>
                        <Text style={styles.input}>{paciente.cartaoSus}</Text>

                        <Text style={styles.title}>Informações</Text>

                        <Text style={styles.label}>Endereço</Text>
                        <Text style={styles.input}>{paciente.endereco}</Text>
                        <Text style={styles.label}>Telefone</Text>
                        <Text style={styles.input}>{paciente.telefone}</Text>
                        <Text style={styles.label}>Posto de Atendimento</Text>
                        <Text style={styles.input}>{paciente.postoAtendimento}</Text>
                        <Text style={styles.label}>Data de Nascimento</Text>
                        <Text style={styles.input}>{paciente.dataNascimento}</Text>
                        

                    </View>



                </View>
            )))}





            {Object.values(data.map(paciente => (

                <View style={styles.bottomtab} key={paciente.idcadPacientes}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('EditarPaciente', {
                            nomePacientes: paciente.nomePacientes,
                            cpf: paciente.cpf,
                            cartaoSus: paciente.cartaoSus,
                            endereco: paciente.endereco,
                            telefone: paciente.telefone,
                            postoAtendimento: paciente.postoAtendimento,
                            dataNascimento: paciente.dataNascimento
                        })}>
                        <Feather
                            name="edit"
                            size={15}
                            color='white'
                            style={{ alignSelf: 'center' }} />
                        <Text style={{ fontSize: 12, color: 'white' }}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('ConsultaPaciente', {
                            id: paciente.idcadPacientes
                        })}>
                        <Feather
                            name="plus-square"
                            size={15}
                            color='white'
                            style={{ alignSelf: 'center' }} />
                        <Text style={{ fontSize: 12, color: 'white' }}>Consulta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('ListaAtendimento', {
                            id: paciente.idcadPacientes
                        })}>
                        <Feather
                            name="share"
                            size={15}
                            color='white'
                            style={{ alignSelf: 'center' }} />
                        <Text style={{ fontSize: 12, color: 'white' }}>Listagem</Text>
                    </TouchableOpacity>
                    
                    <StatusBar style="light" />
                </View>
            )))}

        </ScrollView>

    )
}

export default TelaPaciente