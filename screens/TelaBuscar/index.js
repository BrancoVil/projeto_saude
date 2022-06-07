import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";



function TelaBuscar() {

    const navigation = useNavigation();
    const [cpfPaciente, setCpfPaciente] = useState('');



    const Buscar = async () => {
        if (cpfPaciente != "") {
            await fetch('https://ivfassessoria.com/repositories/api/api/paciente/busca.php', {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    cpf: cpfPaciente
                    
                })
            }).then((response) => response.json())
                .then(responseJson => {
                    if (responseJson == "ok") {
                        navigation.navigate('TelaPaciente', { cpf: cpfPaciente });
                    } else {
                        alert(responseJson);
                        navigation.navigate('Cadastrar Pacientes');
                    }

                })

            // navigation.navigate('TelaPaciente', { cpf: cpfPaciente });
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <Image source={require('../TelaBuscar/imagem1.png')}
                    style={styles.img}></Image>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
                <View style={{ position: 'absolute', alignContent: 'center', width: '100%' }}>
                    <TextInputMask style={styles.textinput}
                        placeholder='CPF do Paciente'
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        value={cpfPaciente}
                        onChangeText={(cpfPaciente) => setCpfPaciente(cpfPaciente)}
                        type={'cpf'}
                    />
                </View>
                <Feather
                    name="search"
                    size={20}
                    color='grey'
                    style={{ position: 'absolute', paddingTop: 70, marginLeft: 15 }} />
            </View>
            <TouchableOpacity style={styles.button}
                onPress={Buscar}>
                <Text style={styles.buttontext}>Buscar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default TelaBuscar