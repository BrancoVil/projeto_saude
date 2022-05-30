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
                        placeholder="Pressão Arterial"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246'}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Glicemia"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10,}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Data de atendimento"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="Local de atendimento"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#ffb246', marginTop:10}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="Sacola de medicamentos"
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

export default FormCadastro