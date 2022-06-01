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


const TelaPaciente = props =>{
  
    props.navigation.navigate('TelaPaciente')
}


const TelaBuscar = ({navigation})=> {

    const [cpf, setCpf] = useState('');

    return (
    <ScrollView style={styles.container}>
        <View>
            <Image source={require('../TelaBuscar/imagem1.png')}
             style={styles.img}></Image>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20,}}>
            <View style={{position:'absolute', alignContent:'center', width:'100%'}}>
                <TextInput style={styles.textinput}
                    placeholder='CPF do Paciente'
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    value={cpf}
                    onChangeText={(cpf) => setCpf(cpf)}
                />
            </View>
            <Feather
            name="search"
            size={20}
            color='grey'
            style={{position:'absolute', paddingTop:70, marginLeft:15}}/>
        </View>
            <TouchableOpacity style={styles.button}
                 onPress={() => {
                    navigation.navigate("TelaPaciente", {
                        cpf: cpf,
                        
                    })
                }}> 
                <Text style={styles.buttontext}>Buscar</Text>
            </TouchableOpacity>
    </ScrollView>
    )
}

export default TelaBuscar