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
    ScrollView,
    ImageBackground
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";



function TelaBuscar() {

    const navigationSearch = useNavigation();
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
                        navigationSearch.navigate('TelaPaciente', { cpf: cpfPaciente });
                    } else {
                        alert(responseJson);
                        navigationSearch.navigate('Cadastrar Pacientes');
                    }

                })
        }
    }

    const imagem = { uri: "https://img.freepik.com/fotos-gratis/medicas-em-roupoes-de-banho-garota-africana-estetoscopio-no-pescoco-do-medico_1157-47156.jpg?w=1380&t=st=1661394543~exp=1661395143~hmac=180e374ca14132f062a5f8c6fbe96c2677edf21ff8def5dd713ff8a465b58f49" };

    return (
        
            <View style={styles.container}>
                <ImageBackground source={imagem} resizeMode="cover" imageStyle=
                {{ opacity: 0.7 }}
                    style={styles.image}>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding:10 }}>
                        <View style={{ alignContent: 'center', width: '100%' }}>
                            <TextInputMask style={styles.textinput}
                                placeholder='CPF do Paciente'
                                underlineColorAndroid="transparent"
                                keyboardType="numeric"
                                value={cpfPaciente}
                                onChangeText={(cpfPaciente) => setCpfPaciente(cpfPaciente)}
                                type={'cpf'}
                                
                            />
                        </View>
                        
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={Buscar}>
                        <Text style={styles.buttontext}>Buscar</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>

        
    )
}

export default TelaBuscar