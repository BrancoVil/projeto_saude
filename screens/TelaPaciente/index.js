import React, { Component, useState, useEffect } from "react";
import {
    View,
    ScrollView,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image
} from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import Routes2 from "../../src/components/Routes2";



function TelaPaciente({ route }) {

    const navigation = useNavigation();
    const [data, setData] = useState([]);

    singleViewPaciente = async () => {
        fetch('https://ivfassessoria.com/repositories/api/api/paciente/readone.php?cpf='+route.params?.cpf, {
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

useEffect(() => {
     singleViewPaciente();
},[])
    


    return (
        <ScrollView style={styles.containerusuario}>
           

            <View style={styles.cardusuario}>
                <Feather
                    name="user"
                    size={105}
                    color='#ffb246' />
            </View>
            <View style={{ position: 'absolute', width: '60%', marginTop: 52, alignSelf: 'flex-end' }}>
                <Text style={{
                    paddingLeft:13,
                    paddingTop:9,
                    borderRadius:30, 
                    height:40,
                    backgroundColor:'#f2f2f2', 
                    marginBottom:20,
                    shadowColor: "grey",
                    shadowOpacity: 0.6,
                    shadowRadius: 1,
                    shadowOffset: {
                    height: 1,
                    width: 3,},
                    elevation:5,}}>{route.params?.cpf}</Text>
                <Text style={styles.textinputshadow} />
            </View>
            {Object.values(data.map(paciente => (
            <View style={styles.cardconsulta} key={paciente.id}>
                <Text style={{ alignSelf: 'center', marginTop: 15, fontSize: 16, color: 'white' }}>Informações de consulta</Text>
                <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 30, marginTop: 10, height: 40, paddingLeft:13, paddingTop:9 }} >{paciente.nome}</Text>
                <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 30, marginTop: 10, height: 40, paddingLeft:13, paddingTop:9 }} >{paciente.cpf}</Text>
                <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 30, marginTop: 10, height: 40, paddingLeft:13, paddingTop:9 }} >{paciente.cartaoSus}</Text>
                <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 30, marginTop: 10, height: 40, paddingLeft:13, paddingTop:9 }} >{paciente.endereco}</Text>
                <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 30, marginTop: 10, height: 40, paddingLeft:13, paddingTop:9 }} >{paciente.telefone}</Text>
                <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 30, marginTop: 10, height: 90, paddingLeft:13, paddingTop:9 }} >{paciente.postoAtendimento}</Text>
            </View>
            )))}
            <View>
                <Text style={{ alignSelf: 'center', marginTop: 15, fontSize: 16, color: 'white' }}>Informações de consulta</Text>
                <Button title="Editar"></Button>
            </View>
        </ScrollView>


    )
}

export default TelaPaciente
