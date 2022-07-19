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
import { useNavigation } from "@react-navigation/native";


function EditarPaciente ({route}) {
    const [idCadPaciente, setIdCadPaciente] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cartaoSus, setCartaoSus] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [postoAtendimento, setPostoAtendimento] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const navigation = useNavigation();
    
    const Editar = async()=>{

            await fetch('https://ivfassessoria.com/repositories/api/api/paciente/update.php?cpf='+route.params?.cpf,{
                method: 'POST',
                header:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
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
            .then(responseJson =>{
                if(responseJson=="Paciente atualizado com Sucesso!."){
                    alert("Paciente Editado com Sucesso!.")
                    props.navigation.navigate('TelaPaciente')
                }else{
                    alert(responseJson);
                }               
            })
    }   

    useEffect(() => {
        setIdCadPaciente(route.params?.idcadPacientes)
        setNome(route.params?.nomePacientes)
        setCpf(route.params?.cpf)
        setCartaoSus(route.params?.cartaoSus)
        setEndereco(route.params?.endereco)
        setTelefone(route.params?.telefone)
        setPostoAtendimento(route.params?.postoAtendimento)
        setDataNascimento(route.params?.dataNascimento)
       
    },[])


    return(
            <ScrollView style={styles.footer}>
                <View style={styles.cardform} >
                    <Text style ={{fontSize:20, alignSelf:'center', marginBottom:20, color:'orange', fontWeight:'bold'}}>Editar Paciente</Text>
                    <TextInput
                        placenholder="Nome"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246'}}
                        autoCapitalize='none'
                        value={nome}
                        onChangeText={(nome) => setNome(nome)}
                    />
                    <TextInputMask
                        keyboardType="numeric"
                        placeholder="CPF"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10,}}
                        autoCapitalize='none'
                        onChangeText={(cpf) => setCpf(cpf)}
                        type={'cpf'}
                        value={cpf}
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Cartão SUS"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10,}}
                        autoCapitalize='none'
                        onChangeText={(cartaoSus) => setCartaoSus(cartaoSus)}
                        value={cartaoSus}
                    />
                    <TextInput
                        placeholder="Endereço"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(endereco) => setEndereco(endereco)}
                        value={endereco}
                    />
                    <TextInputMask
                        keyboardType="numeric"
                        placeholder="Telefone"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(telefone) => setTelefone(telefone)}
                        value={telefone}
                        type={'cel-phone'}
                        options={{
                            maskType:'BRL',
                            withDDD:true,
                            dddMask:'(99)'
                        }}
                    />
                    <TextInput
                        placeholder="Posto de atendimento"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(postoAtendimento) => setPostoAtendimento(postoAtendimento)}
                        value={postoAtendimento}
                    />
                   <TextInputMask
                        placeholder="Data de Nascimento"
                        keyboardType="numeric"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
<<<<<<< HEAD
                        onChangeText={(dataNascimento) => setDataNascimento(dataNascimento)}
                        value={dataNascimento}
=======
                        onChangeText={(datanascimento) => setDatanascimento(datanascimento)}
                        value={datanascimento}
>>>>>>> 6005d97ac669f90db31010e4dc64b980a15c824c
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                          }}
                    
                    />
                    
                    <TouchableOpacity style={styles.signIn} onPress={Editar()}>
                            <Text style={{fontSize:20, alignContent:'center', color:'white'}}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
 }
export default EditarPaciente