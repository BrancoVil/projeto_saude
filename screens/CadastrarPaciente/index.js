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

const TelaPaciente = props =>{
    props.navigation.navigate('TelaPaciente')
}


const CadastrarPaciente = props => {

    return(
            <ScrollView style={styles.footer}>
                <View style={styles.cardform}>
                    <TextInput
                        placeholder="Nome"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246'}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="CPF ou N° SUS"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10,}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="Endereço"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="Posto de atendimento"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="Observações"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:130,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10, textAlignVertical:'top',}}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity style={styles.signIn} onPress={() => TelaPaciente(props) }>
                            <Text style={{fontSize:20, alignContent:'center', color:'white'}}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}

export default CadastrarPaciente