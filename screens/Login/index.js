import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image
} from 'react-native';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';

const TelaCadastro = props =>{
    props.navigation.navigate('TelaCadastro')
}

const Login = props => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={require('../Login/logo.png')}
                    style={styles.img}></Image>
                <Text style={styles.text_header}>Bem-Vindo!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Atendente</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#000"
                        size={25}
                        />
                    <TextInput
                        placeholder="Usuário"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Senha</Text>
            <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#000"
                        size={28}
                        />
                    <TextInput
                        placeholder="Insira sua senha"
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                <TouchableOpacity>
                    <Feather
                        name="eye"
                        color="#205DB8"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
                <View style={styles.button}>
                    <LinearGradient
                        colors={['#205DB8', '#729fe2']}
                        style={styles.signIn}>
                    <TouchableOpacity onPress={() => TelaCadastro(props) }>
                        <Text style={styles.textSign}>ENTRAR</Text>
                    </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default Login