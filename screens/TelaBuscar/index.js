import React, {useState} from "react";
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


const TelaBuscar = props => {

    const[cpf, setCpf] = useState('');
    
  function Buscar (){
    props.navigation.navigate('TelaPaciente', cpf)
}
    return(
    <ScrollView style={styles.container}>
        <View>
            <Image source={require('../TelaBuscar/imagem1.png')}
             style={styles.img}></Image>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20,}}>
            <View style={{position:'absolute', alignContent:'center', width:'100%'}}>
            <TextInput style={styles.textinput}
                placeholder='Buscar pacientes'
                underlineColorAndroid="transparent"
                />
            </View>
            <Feather
            name="search"
            size={20}
            color='grey'
            style={{position:'absolute', paddingTop:70, marginLeft:15}}
            value={cpf}
            onChangeText={(cpf) => setCpf(cpf)}
            />
            
        </View>
            <TouchableOpacity style={styles.button}
            onPress={Buscar}>
                <Text style={styles.buttontext}>Buscar</Text>
            </TouchableOpacity>
    </ScrollView>
    )
}

export default TelaBuscar