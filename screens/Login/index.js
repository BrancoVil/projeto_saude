import React, { useEffect, useState } from "react";
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
import { StackNavigator } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';

    const Login = props => {

        const [cpf, setCpf] = useState('');
        const [password, setPassword] = useState('');

    const signIn = async()=>{
        if(cpf!="" && password!=""){
            props.navigation.navigate('TelaBuscar')
            await fetch('https://ivfassessoria.com/repositories/api/api/usuario/read.php',{
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'cpf': cpf,
                    'password': password
                })
            }).then(res => res.json())
            .then(resData =>{
                setMessage(resData.message);
            })
        }
    }   

    return(
        <ScrollView style={styles.container}>
                <LinearGradient
                colors={['#024a97', '#4ea3fd']}
                style={styles.gradient_header}
                start={{x:0.7, y:0.6}}>           
            <Image source={require('../Login/logo1.png')}
                    style={styles.img}></Image>
                <Text style={styles.text_header}>Bem-Vindo!</Text>
                </LinearGradient>
            <View style={styles.footer}>
                <View style={styles.action}>
                    <Feather
                        name="user"
                        color="#000"
                        size={25}
                        />
                    <TextInput
                        placeholder="Usuário"
                        style={styles.textInput}
                        id="username"
                        name="username"
                        value={cpf}
                        onChangeText={(cpf) => setCpf(cpf)}
                    />
                </View>
                <View style={{marginTop:35}}/>
            <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#000"
                        size={25}
                        />
                    <TextInput
                        placeholder="Senha"
                        id="password"
                        name="password"
                        style={styles.textInput}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
            </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                    <Text style={{alignSelf:'center', paddingBottom:25, fontSize:15, color:'#024a97', textDecorationLine:'underline'}}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.signIn}
                    onPress={signIn()}>
                            <Text style={styles.textSign}>ENTRAR</Text>
                            <Feather
                                name="log-in"
                                size={15}
                                color='white' style={{paddingLeft:10}}/>
                    </TouchableOpacity>
                </View>
            </View>    
        </ScrollView>
    )
}

export default Login