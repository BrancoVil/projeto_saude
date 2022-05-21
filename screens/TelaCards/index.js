import React from "react";
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

const FormCadastro = props =>{
    props.navigation.navigate('FormCadastro')
}

const TelaCards = props => {

    return(
    <ScrollView style={{ backgroundColor:'#F5F5F5',}}>
    <View style={styles.card}>
        <Feather 
        name="user-plus"
        size={45}
        color='#4ea3fd'
        style={{alignSelf:'center', paddingTop:30}}/>
                <TouchableOpacity onPress={() => FormCadastro(props) }>
                        <Text style={styles.textSign}>CADASTRAR</Text>
                </TouchableOpacity>
                        <Text style={styles.textSignf}>Cadastre aqui informações sobre os pacientes.</Text>
                    <View style={{alignItems:'flex-end', paddingRight:20, paddingTop:10}}>
                        <TouchableOpacity style={{borderRadius:40, width:'20%', backgroundColor:'#4ea3fd',}} onPress={() => FormCadastro(props) }>
                            <Feather
                            name="arrow-right"
                            size={40}
                            color='white'
                            style={{alignSelf:'center'}}/>
                        </TouchableOpacity>   
                    </View>             
    </View>
        <View style={styles.card1}>
        <Feather 
        name="list"
        size={45}
        color='#4ea3fd'
        style={{alignSelf:'center', paddingTop:30}}/>
                <TouchableOpacity>
                        <Text style={styles.textSign}>LISTAR</Text>
                </TouchableOpacity>
                        <Text style={styles.textSignf}>Aqui você acompanha os pacientes já cadastrados.</Text>
                    <View style={{alignItems:'flex-end', paddingRight:20, paddingTop:10}}>
                        <TouchableOpacity style={{borderRadius:40, width:'20%', backgroundColor:'#4ea3fd',}}>
                            <Feather
                            name="arrow-right"
                            size={40}
                            color='white'
                            style={{alignSelf:'center'}}/>
                        </TouchableOpacity>   
                    </View>
        </View>
    </ScrollView>
    )
}

export default TelaCards