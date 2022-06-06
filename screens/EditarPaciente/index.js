import React, { useEffect, useState } from "react";
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

const TelaPaciente = props =>{
    props.navigation.navigate('TelaPaciente')
}


const EditarPaciente = props => {
    const [paciente, setPaciente] = useState('');
    const [cpf, setCpf] = useState('');
    const [sus, setSus] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [postoatendimento, setPostoatendimento] = useState('');
    const [datanascimento, setDatanascimento] = useState('');
    
    const Cadastrar = async()=>{
        if(cpf!="" || sus!=""){
            
            await fetch('https://ivfassessoria.com/repositories/api/api/paciente/create.php',{
                method: 'POST',
                header:{
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
            .then(responseJson =>{
                if(responseJson=="Paciente cadastrado com Sucesso!."){
                    alert("Paciente cadastrado com Sucesso!.")
                    props.navigation.navigate('TelaPaciente')
                }else{
                    alert(responseJson);
                }
                
            })
        }
    }   



    return(
            <ScrollView style={styles.footer}>
                <View style={styles.cardform}>
                    <Text style ={{fontSize:20, alignSelf:'center', marginBottom:20, color:'orange', fontWeight:'bold'}}>Editar Paciente</Text>
                    <TextInput
                        placeholder="Nome"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246'}}
                        autoCapitalize='none'
                        onChangeText={(paciente) => setPaciente(paciente)}
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="CPF"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10,}}
                        autoCapitalize='none'
                        onChangeText={(cpf) => setCpf(cpf)}
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Cartão SUS"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10,}}
                        autoCapitalize='none'
                        onChangeText={(sus) => setSus(sus)}
                    />
                    <TextInput
                        placeholder="Endereço"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(endereco) => setEndereco(endereco)}
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Telefone"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(telefone) => setTelefone(telefone)}
                    />
                    <TextInput
                        placeholder="Posto de atendimento"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(postoatendimento) => setPostoatendimento(postoatendimento)}
                    />
                   <TextInput
                        placeholder="Data de Nascimento"
                        keyboardType="numeric"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(datanascimento) => setDatanascimento(datanascimento)}
                    />
                    
                    <TouchableOpacity style={styles.signIn} onPress={(Cadastrar)}>
                            <Text style={{fontSize:20, alignContent:'center', color:'white'}}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}

export default EditarPaciente