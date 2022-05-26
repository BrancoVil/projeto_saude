import React from "react";
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

const TelaBuscar = props => {
    return(
    <View style={styles.container}>
        <View>
            <Image source={require('../TelaBuscar/imagem1.png')}
             style={styles.img}></Image>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:50,}}>
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
            style={{position:'absolute', paddingTop:70, paddingRight:230}}/>
        </View>
            <TouchableOpacity style={styles.button}
            onPress={() => TelaPaciente (props)}>
                <Text style={styles.buttontext}>Buscar</Text>
            </TouchableOpacity>
    </View>
    )
}

export default TelaBuscar