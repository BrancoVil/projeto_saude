import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, useFocusEffect } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { TextInputMask } from "react-native-masked-text";


export default function AppForm({ navigation }) {

    const [paciente, setPaciente] = useState('');
    const [datanascimento, setDatanascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [sus, setSus] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [postoatendimento, setPostoatendimento] = useState('');

    function Cadastrar() {
        if (cpf != "" || sus != "" || paciente !="") {

            fetch('https://ivfassessoria.com/repositories/api/api/paciente/create.php', {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nomePacientes: paciente,
                    cpf: cpf,
                    cartaoSus: sus,
                    endereco: endereco,
                    telefone: telefone,
                    postoAtendimento: postoatendimento,
                    dataNascimento: datanascimento
                })
            }).then((response) => response.json())
                .then(responseJson => {
                    if (responseJson == "Paciente cadastrado com Sucesso!.") {
                        alert("Paciente cadastrado com Sucesso!.")
                        navigation.navigate("TelaPaciente", {
                            cpf: cpf
    
                        })
                    } else {
                        alert(responseJson);
                    }

                })
        }

    }
    
    
    return (
        <ScrollView style={styles.container}>
            <View >
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(paciente) => setPaciente(paciente)}
                        clearButtonMode="always" />
                    <Text style={styles.label}>Data de Nascimento</Text>

                    <TextInputMask
                        style={styles.input}
                        onChangeText={(datanascimento) => setDatanascimento(datanascimento)}
                        keyboardType='numeric'
                        clearButtonMode="always"
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                    />
                    <Text style={styles.label}>CPF</Text>
                    <TextInputMask
                        style={styles.input}
                        onChangeText={(cpf) => setCpf(cpf)}
                        keyboardType='numeric'
                        clearButtonMode="always"
                        type={'cpf'} />

                    <Text style={styles.label}>Cartão do SUS</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(sus) => setSus(sus)}
                        keyboardType='numeric'
                        clearButtonMode="always" />

                    <Text style={styles.label}>Endereço</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(endereco) => setEndereco(endereco)}
                        clearButtonMode="always" />

                    <Text style={styles.label}>Telefone</Text>
                    <TextInputMask
                        style={styles.input}
                        onChangeText={(telefone) => setTelefone(telefone)}
                        keyboardType='numeric'
                        clearButtonMode="always"
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99)'
                        }} />

                    <Text style={styles.label}>Posto de Atendimento</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(postoatendimento) => setPostoatendimento(postoatendimento)}
                        clearButtonMode="always" />




                    <TouchableOpacity style={styles.button} onPress={Cadastrar}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="light" />
            </View>
        </ScrollView>

    );
}



