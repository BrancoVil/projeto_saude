import React, { useEffect, useState } from "react";
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


function FormCadastro ({route}) {

    const[paciente, setPaciente] = useState('');
    const[cpf, setCpf] = useState('');

    const [pa, setPa] = useState('');
    const [glicemia, setGlicemia] = useState('');
    const [dataAtendimento, setDataAtendimento] = useState('');
    const [localAtendimento, setLocalAtendimento] = useState('');
    const [sacolaMed, setSacolaMed] = useState('');

    const CadConsulta = async()=>{
     fetch('https://ivfassessoria.com/repositories/api/api/atendimento/create.php',{
        method: 'POST',
        header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            pressaoarterial: pa,
            glicemia: glicemia,
            localatendimento: localAtendimento,
            sacolamedicamento: sacolaMed
        })
    }).then((response) => response.json())
    .then(responseJson =>{
        if(responseJson=="Consulta cadastrada com Sucesso!."){
            alert("Consulta cadastrada com Sucesso!.")
            props.navigation.navigate('TelaPaciente', {
                nome: paciente,
                cpf: cpf
            })
        }else{
            alert(responseJson);
        }
        
    })
}   

useEffect(() => {
    setPaciente(route.params?.paciente);
    setCpf(route.params?.cpf);
}, [])
    return(
            <ScrollView style={styles.footer}>
                <View style={styles.cardform}>
                    <Text style={{fontSize:20, alignSelf:'center', marginBottom:20, color:'orange', fontWeight:'bold', marginTop:20}}>Cadastrar Consulta</Text>
                    <TextInput
                        placeholder="Pressão Arterial"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246'}}
                        autoCapitalize='none'
                        onChangeText={(pa) => setPa(pa)}
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Glicemia"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10,}}
                        autoCapitalize='none'
                        onChangeText={(glicemia) => setGlicemia(glicemia)}
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Data de atendimento"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(dataAtendimento) => setDataAtendimento(dataAtendimento)}
                    />
                    <TextInput
                        placeholder="Local de atendimento"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                        onChangeText={(localAtendimento) => setLocalAtendimento(localAtendimento)}
                    />
                    <TextInput
                        placeholder="Sacola de medicamentos"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:130,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10, textAlignVertical:'top',}}
                        autoCapitalize='none'
                        onChangeText={(sacolaMed) => setSacolaMed(sacolaMed)}
                    />
                    <TouchableOpacity style={styles.signIn} onPress={CadConsulta}>
                            <Text style={{fontSize:20, alignContent:'center', color:'white'}}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}

export default FormCadastro