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

const ListarPacientes = () => {

    const[data, setData] = useState([]);

    const getPaciente = async () => {
        fetch('https://ivfassessoria.com/repositories/api/api/paciente/read.php', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
         },
        })
        .then((response) => response.json())
        .then((responseJson) => (
            setData(responseJson.body)
        ));
    }

    useEffect(() => {
        getPaciente();
    },[])

    return(
        <View>
            {Object.values(data).map(paciente => (
                <Text key={paciente.id} ></Text>,
                <Text>Nome:</Text>,
                <Text>{paciente.nomePacientes}</Text>
            ))}
        </View>
    );
}

export default ListarPacientes