import React, { useEffect, useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    ImageBackground
} from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const imagem = { uri: "https://img.freepik.com/fotos-gratis/jovem-medica-sorridente-usando-manto-medico-com-estetoscopio-aparecendo-o-polegar-isolado-em-um-fundo-laranja_141793-119257.jpg?w=1380&t=st=1661398309~exp=1661398909~hmac=426ab921127e6b472cf6b4749e85b797d891532df8b271642acb0960915ba6c8" };

const Login = (props) => {

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');


    const signIn = async () => {
        if (cpf != "" && password != "") {

            await fetch('https://ivfassessoria.com/repositories/api/api/usuario/login.php', {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    cpf: cpf,
                    senha: password
                })
            }).then((response) => response.json())
                .then(responseJson => {
                    if (responseJson == "ok") {
                        alert("Seja bem vindo!")
                        props.navigation.navigate('TelaBuscar')
                    } else {
                        alert(responseJson);
                    }

                })
        }
    }

    const TelaBuscar = props => {
        props.navigation.navigate('TelaBuscar')
    }


    const [data, setData] = React.useState({
        password: '',
        secureTextEntry: true
    });

    const UpdateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={imagem} resizeMode="cover" imageStyle=
                {{ opacity: 0.7 }}
                style={styles.image}>


                <View style={styles.footer}>
                    <Image source={require('../Login/logo.png')}
                        style={styles.img}></Image>

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
                                color="#000"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                style={styles.signIn}
                                onPress={signIn}>
                                <Text style={styles.textSign}>ENTRAR</Text>
                                <Feather
                                    name="log-in"
                                    size={25}
                                    color='white' style={{ paddingLeft: 10 }} />
                            </TouchableOpacity>


                        </View>

                    </View>

                </View>


                <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                    <Image source={require('../Login/logopassira.png')}
                        style={{ height: 45, width: 170, marginTop: 30 }} />
                    <Image source={require('../Login/logonaassau.png')}
                        style={{ height: 47, width: 70, marginTop: 30, borderLeftWidth: 1, borderColor: '#b55031' }} />
                </View>
            </ImageBackground>

        </View>
    )
}

export default Login