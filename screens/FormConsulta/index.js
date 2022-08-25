import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
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
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={255}
      />
    );
  }

function FormCadastro({ route, navigation }) {

    const [idCadPaciente, setIdCadPaciente] = useState(route.params?.id);
    const [paciente, setPaciente] = useState('');
    const [cpf, setCpf] = useState(route.params?.cpf);

    const [pa, setPa] = useState('');
    const [glicemia, setGlicemia] = useState('');
    const [dataAtendimento, setDataAtendimento] = useState('');
    const [localAtendimento, setLocalAtendimento] = useState('');
    const [sacolaMed, setSacolaMed] = useState('');

    useEffect(() => {
            CadConsulta();
        }, [])

    const CadConsulta = async () => {
        if (pa != "" || glicemia != "" || localAtendimento != "" || sacolaMed != "") {
            fetch('https://ivfassessoria.com/repositories/api/api/atendimento/create.php', {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    idcadPacientes: idCadPaciente,
                    pressaoarterial: pa,
                    glicemia: glicemia,
                    localdeatedimento: localAtendimento,
                    sacolamedicamento: sacolaMed
                })
            }).then((response) => response.json())
                .then(responseJson => {
                    if (responseJson == "Consulta cadastrada com Sucesso!.") {
                        alert("Consulta cadastrada com Sucesso!.")
                        navigation.navigate("ListaAtendimento", {
                            id: idcadPacientes
                        });
                        
                    } else {
                        alert(responseJson);
                    }

                })
        }


    }

    
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={(idCadPaciente) => setIdCadPaciente(idCadPaciente)}
                        value={idCadPaciente}
                        style={{ color: 'transparent' }}
                    />
                    <Text style={styles.label}>Pressão Arterial</Text>
                    <TextInput
                        style={styles.input}
                        clearButtonMode="always"
                        onChangeText={(pa) => setPa(pa)}
                    />
                    <Text style={styles.label}>Glicemia</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        clearButtonMode="always"
                        onChangeText={(glicemia) => setGlicemia(glicemia)}
                    />
                    <Text style={styles.label}>Local de Atendimento</Text>
                    <TextInput
                        style={styles.input}
                        clearButtonMode="always"
                        onChangeText={(localAtendimento) => setLocalAtendimento(localAtendimento)}
                    />
                    <Text style={styles.label}>Sacole de Medicamento</Text>
                    <UselessTextInput
                        multiline
                        numberOfLines={6}
                        style={styles.inputText}
                        clearButtonMode="always"
                        onChangeText={(sacolaMed) => setSacolaMed(sacolaMed)}
                    />
                    <TouchableOpacity style={styles.button} onPress={CadConsulta}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                    
                    <StatusBar style="light" />
                </View>
            </View>
            

        </ScrollView>
    )
}

export default FormCadastro