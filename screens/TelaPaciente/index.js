import React, { Component, useState, useEffect } from "react";
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
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

    useEffect(() => {
        singleViewPaciente();
    }, [])


    return (
<<<<<<< HEAD
=======
        <ScrollView style={styles.containerusuario}>
            {Object.values(data.map(paciente => (

                <View style={{ paddingHorizontal: 20 }}>
                    <View style={styles.cardusuario}>
                        <Feather
                            name="user"
                            size={30}
                            color='#ffb246' />
                    </View>
                    <View style={{ position: 'absolute', width: '75%', marginTop: 30, alignSelf: 'flex-end', paddingHorizontal: 20, }}>
                        <Text style={{
                            paddingLeft: 10,
                            height: 30,
                            fontSize: 20,
                            width:'100%',
                            backgroundColor:'#f2f2f2',
                            borderRadius:5,
                            marginBottom:5
                        }}>Nome: {paciente.nomePacientes}</Text>
                        <Text style={{
                            paddingLeft: 10,
                            fontSize: 15,
                            width:'80%',
                            backgroundColor:'#f2f2f2',
                            borderRadius:5,
                            marginBottom:5

                        }}>CPF: {paciente.cpf}</Text>
                        <Text style={{
                            paddingLeft: 10,
                            fontSize: 14,
                            width:'80%',
                            backgroundColor:'#f2f2f2',
                            borderRadius:5
                        }}>SUS: {paciente.sus}</Text>

                    </View>
                    <View style={styles.cardconsulta} key={paciente.id}>
                        <Text style={{ alignSelf: 'center', fontSize: 19, marginBottom:20, color: 'white' }}>Informações de consulta</Text>
                        
                        <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 5, marginTop: 5, height: 40, paddingLeft: 7, paddingTop: 5 }} >Endereço: {paciente.endereco}</Text>
                        <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 5, marginTop: 5, height: 40, paddingLeft: 7, paddingTop: 5 }} >Telefone: {paciente.telefone}</Text>
                        <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 5, marginTop: 5, height: 50, paddingLeft: 7, paddingTop: 5 }} >Posto de Atendimento: {paciente.postoAtendimento}</Text>
                        <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 5, marginTop: 5, height: 30, paddingLeft: 7, paddingTop: 5 }} >Data Nascimento: {paciente.dataNascimento}</Text>
                        
                    </View>
                </View>
            )))}
            <View style={styles.bottomtab}>
                <TouchableOpacity style={{ justifyContent: 'center', marginLeft: 13 }}
                    onPress={() => navigation.navigate(EditarPaciente)}>
                    <Feather
                        name="edit"
                        size={23}
                        color='grey'
                        style={{ alignSelf: 'center' }} />
                    <Text style={{ fontSize: 11, color: 'grey' }}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center', }}
                    onPress={() => navigation.navigate(ConsultaPaciente)}>
                    <Feather
                        name="plus-square"
                        size={23}
                        color='grey'
                        style={{ alignSelf: 'center' }} />
                    <Text style={{ fontSize: 11, color: 'grey' }}>Consulta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center' }}>
                    <Feather
                        name="share"
                        size={23}
                        color='grey'
                        style={{ alignSelf: 'center' }} />
                    <Text style={{ fontSize: 11, color: 'grey' }}>Encaminhar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
>>>>>>> 6005d97ac669f90db31010e4dc64b980a15c824c

        <ScrollView style={styles.containerusuario}>
        {Object.values(data.map(paciente => (
                <View style={{ paddingHorizontal: 20 }} key={paciente.idcadPacientes}>
                    <View style={styles.cardusuario}>
                        <Feather
                            name="user"
                            size={30}
                            color='#ffb246' />
                    </View>
                    <View style={{ position: 'absolute', width: '75%', marginTop: 30, alignSelf: 'flex-end', paddingHorizontal: 20, }}>
                        <Text style={{
                            paddingLeft: 10,
                            height: 30,
                            fontSize: 20,
                            width:'100%',
                            backgroundColor:'#f2f2f2',
                            borderRadius:5,
                            marginBottom:5
                        }}>Nome: {paciente.nomePacientes}</Text>
                        <Text style={{
                            paddingLeft: 10,
                            fontSize: 15,
                            width:'80%',
                            backgroundColor:'#f2f2f2',
                            borderRadius:5,
                            marginBottom:5

                        }}>CPF: {paciente.cpf}</Text>
                        <Text style={{
                            paddingLeft: 10,
                            fontSize: 14,
                            width:'80%',
                            backgroundColor:'#f2f2f2',
                            borderRadius:5
                        }}>SUS: {paciente.sus}</Text>

                    </View>
                    <View style={styles.cardconsulta} key={paciente.id}>
                        <Text style={{ alignSelf: 'center', fontSize: 19, marginBottom:20, color: 'white' }}>Informações de consulta</Text>
                        
                        <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 5, marginTop: 5, height: 40, paddingLeft: 7, paddingTop: 5 }} >Endereço: {paciente.endereco}</Text>
                        <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 5, marginTop: 5, height: 40, paddingLeft: 7, paddingTop: 5 }} >Telefone: {paciente.telefone}</Text>
                        <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 5, marginTop: 5, height: 50, paddingLeft: 7, paddingTop: 5 }} >Posto de Atendimento: {paciente.postoAtendimento}</Text>
                        <Text style={{ backgroundColor: '#f2f2f2', borderRadius: 5, marginTop: 5, height: 30, paddingLeft: 7, paddingTop: 5 }} >Data Nascimento: {paciente.dataNascimento}</Text>
                        
                    </View>
                </View>
                )))}
        {Object.values(data.map(paciente => (

            <View style={styles.bottomtab} key={paciente.idcadPacientes}>
                <TouchableOpacity style={{ justifyContent: 'center', marginLeft: 13 }}
                    onPress={() => navigation.navigate('EditarPaciente',{ 
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
                        size={23}
                        color='grey'
                        style={{ alignSelf: 'center' }} />
                    <Text style={{ fontSize: 11, color: 'grey' }}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center', }}
                    onPress={() => navigation.navigate(ConsultaPaciente)}>
                    <Feather
                        name="plus-square"
                        size={23}
                        color='grey'
                        style={{ alignSelf: 'center' }} />
                    <Text style={{ fontSize: 11, color: 'grey' }}>Consulta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center' }}>
                    <Feather
                        name="share"
                        size={23}
                        color='grey'
                        style={{ alignSelf: 'center' }} />
                    <Text style={{ fontSize: 11, color: 'grey' }}>Encaminhar</Text>
                </TouchableOpacity>
            </View>
                            )))}

        </ScrollView>

    )
}

export default TelaPaciente
