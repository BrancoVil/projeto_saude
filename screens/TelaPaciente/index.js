import React, {useEffect} from "react";
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
import {LinearGradient} from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const TelaPaciente = (route) => {
    const [cpf, setCpf] = useState('')

    const buscarPaciente = async () => {
        fetch('https://ivfassessoria.com/repositories/api/api/paciente/read.php?cpf=' + cpf, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
         },
        })
        .then((response) => response.json())
        .then((responseJson) => (
            alert(responseJson.body)
        ));
    }

    useEffect(() => {
         cpf = route
        buscarPaciente()
    })
    return(
        <ScrollView style={styles.containerusuario}>
            <View style={styles.cardusuario}>
              <Feather
              name="user"
              size={105}
              color='#ffb246'/>   
            </View>
            <View style={{position:'absolute', width:'60%', marginLeft:160, marginTop:52 }}>
                  <TextInput style={styles.textinputshadow}/>
                  <TextInput style={styles.textinputshadow}/>
            </View>
            <View style={styles.cardconsulta}>
                <Text style={{alignSelf:'center', marginTop:15, fontSize:16, color:'white'}}>Informações de consulta</Text>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:90}}/>
            </View>   
        </ScrollView>
    )
}

export default TelaPaciente
