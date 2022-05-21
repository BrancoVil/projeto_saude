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

const SignUp = props => {

    return(
         <View>
             <Text style={{alignSelf:'center', paddingTop:40}}>Formulário de teste</Text>
            <View style={styles.cardform}>
                    <TextInput
                        placeholder="Teste"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#4ea3fd'}}
                        autoCapitalize='none'
                    />
                <View style={{flex:0, flexDirection:'row', marginBottom:10}}>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="teste"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'40%', borderColor:'#4ea3fd', marginTop:10,}}
                        autoCapitalize='none'
                    />
                    <Text style={{paddingLeft:10, paddingRight:10, alignItems:'center', marginTop:20, fontSize:17}}>Ou</Text>
                    <TextInput
                        placeholder="teste"
                        style={{fontSize:16, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'45%', borderColor:'#4ea3fd', marginTop:10}}
                        autoCapitalize='none'
                    />
                </View>
                    <TextInput
                        placeholder="teste"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#4ea3fd',}}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholder="teste"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#4ea3fd', marginTop:10}}
                        autoCapitalize='none'
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="teste"
                        style={{fontSize:20, borderWidth:1, borderRadius:20, paddingLeft:15, height:50,borderColor:'grey', backgroundColor:'#f5f5f5', width:'100%', borderColor:'#4ea3fd', marginTop:10}}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.cardform2}>
                <TouchableOpacity style={styles.signIn} onPress={() => TelaPaciente(props) }>
                            <Text style={{fontSize:20, alignContent:'center', color:'white'}}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
         </View>
    )
}

export default SignUp