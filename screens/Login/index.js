import React, { useEffect, useState } from "react";
import { TextInputMask } from "react-native-masked-text";
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

    const Login = () => {

        const [cpf, setCpf] = useState('');
        const [password, setPassword] = useState('');

    const signIn = async()=>{
        if(cpf!="" && password!=""){
            
            await fetch('https://ivfassessoria.com/repositories/api/api/usuario/read.php',{
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'cpf': cpf,
                    'senha': password
                })
            }).then(res => res.json())
            .then(resData =>{
                setMessage(resData.message);
                props.navigation.navigate('TelaBuscar')
            })
        }
    }   

const TelaBuscar = props =>{
    props.navigation.navigate('TelaBuscar')
}


    const [data, setData] = React.useState({
        password:'',
        secureTextEntry:true
     });

     const UpdateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val
        });
    }

    return(
        <ScrollView style={styles.container}>
                <LinearGradient
                colors={['#ffc935', '#ffb246']}
                style={styles.gradient_header}
                start={{x:0.7, y:0.6}}>           
                <Image source={require('../Login/logo.png')}
                    style={styles.img}></Image>
                </LinearGradient>
            <View style={styles.footer}>
                <View style={styles.action}>
                    <Feather
                        name="user"
                        color="#000"
                        size={25}
                        />
                    <TextInputMask
                        placeholder="CPF"
                        style={styles.textInput}
                        id="cpf"
                        name="cpf"
                        value={cpf}
                        type={'cpf'}
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
                        secureTextEntry={data.secureTextEntry ? true : false}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                <TouchableOpacity
                onPress={UpdateSecureTextEntry}>
                    <Feather
                        name="eye"
                        color="#ffb246"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
                 <TouchableOpacity>
                    <Text style={{ paddingTop:35, paddingBottom:25, fontSize:15, color:'#024a97', textDecorationLine:'underline'}}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                    style={styles.signIn}
                    onPress={signIn}>
                            <Text style={styles.textSign}>ENTRAR</Text>
                            <Feather
                                name="log-in"
                                size={15}
                                color='white' style={{paddingLeft:10}}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
            <Image source={require('../Login/logopassira.png')}
            style={{height:45, width:170, marginTop:30 }}/>
            <Image source={require('../Login/logonaassau.png')}
            style={{height:47, width:70, marginTop:30, borderLeftWidth:1, borderColor:'blue'}}/>
            </View>
        </ScrollView>
    )
}

export default Login