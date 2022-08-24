import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInputMask } from "react-native-masked-text";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


function EditarPaciente ({route, navigation}) {
    const [idCadPaciente, setIdCadPaciente] = useState(route.params?.idcadPacientes);
    const [nome, setNome] = useState(route.params?.nomePacientes);
    const [cpf, setCpf] = useState(route.params?.cpf);
    const [cartaoSus, setCartaoSus] = useState(route.params?.cartaoSus);
    const [endereco, setEndereco] = useState(route.params?.endereco);
    const [telefone, setTelefone] = useState(route.params?.telefone);
    const [postoAtendimento, setPostoAtendimento] = useState(route.params?.postoAtendimento);
    const [dataNascimento, setDataNascimento] = useState(route.params?.dataNascimento);

    
    const Editar = props => {


        fetch('https://ivfassessoria.com/repositories/api/api/paciente/update.php', {
            method: 'PUT',
            header: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nomePacientes: nome,
                cpf: cpf,
                cartaoSus: cartaoSus,
                endereco: endereco,
                telefone: telefone,
                postoAtendimento: postoAtendimento,
                dataNascimento: dataNascimento
            })
        }).then((response) => response.json())
            .then(responseJson => {
                if (responseJson == "Paciente atualizado com Sucesso!.") {
                    alert(responseJson);
                    navigation.navigate("ListarPacientes");

                } else {
                    alert(responseJson);
                }
            })

        

    } 

    // useEffect(() => {
    //     setIdCadPaciente(route.params?.idcadPacientes)
    //     setNome(route.params?.nomePacientes)
    //     setCpf(route.params?.cpf)
    //     setCartaoSus(route.params?.cartaoSus)
    //     setEndereco(route.params?.endereco)
    //     setTelefone(route.params?.telefone)
    //     setPostoAtendimento(route.params?.postoAtendimento)
    //     setDataNascimento(route.params?.dataNascimento)
       
    // },[])


    return(
        <ScrollView style={styles.container}>
            <View >
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome Completo 1</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(paciente) => setNome(paciente)}
                        clearButtonMode="always"
                        value={nome} />
                    <Text style={styles.label}>Data de Nascimento</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(datanascimento) => setDataNascimento(datanascimento)}
                        keyboardType='numeric'
                        clearButtonMode="always"
                        value={dataNascimento} />
                    <Text style={styles.label}>CPF</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(cpf) => setCpf(cpf)}
                        keyboardType='numeric'
                        clearButtonMode="always"
                        value={cpf} />

                    <Text style={styles.label}>Cartão do SUS</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(sus) => setCartaoSus(sus)}
                        keyboardType='numeric'
                        clearButtonMode="always"
                        value={cartaoSus} />

                    <Text style={styles.label}>Endereço</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(endereco) => setEndereco(endereco)}
                        clearButtonMode="always"
                        value={endereco} />

                    <Text style={styles.label}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(telefone) => setTelefone(telefone)}
                        keyboardType='numeric'
                        clearButtonMode="always"
                        value={telefone} />

                    <Text style={styles.label}>Posto de Atendimento</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(postoatendimento) => setPostoAtendimento(postoatendimento)}
                        clearButtonMode="always"
                        value={postoAtendimento} />




                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={Editar}>Atualizar</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="light" />
            </View>
        </ScrollView>
    )
    
 }
export default EditarPaciente

