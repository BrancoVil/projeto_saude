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


const FormCadastro = props => {

    return(
            <ScrollView style={styles.footer}>
                <View style={styles.cardform}>
                    <TextInput
                        placeholder="Nome"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#4ea3fd'}}
                        autoCapitalize='none'
                    />
                <View style={{flex:0, flexDirection:'row', marginBottom:10}}>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="CPF"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'40%', borderColor:'#4ea3fd', marginTop:10,}}
                        autoCapitalize='none'
                    />
                    <Text style={{paddingLeft:10, paddingRight:10, alignItems:'center', marginTop:20, fontSize:17}}>Ou</Text>
                    <TextInput
                        placeholder="Cartão do SUS"
                        style={{fontSize:16, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'45%', borderColor:'#4ea3fd', marginTop:10}}
                        autoCapitalize='none'
                    />
                </View>
                    <TextInput
                        placeholder="Endereço"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#4ea3fd',}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="Idade"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#4ea3fd', marginTop:10}}
                        autoCapitalize='none'
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Quem está atendendo?"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#4ea3fd', marginTop:10}}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity style={styles.signIn} onPress={() => TelaPaciente(props) }>
                            <Text style={{fontSize:20, alignContent:'center', color:'white'}}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}

export default FormCadastro