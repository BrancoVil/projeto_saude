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
import { StackNavigator } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';



const TelaCards = props =>{
    props.navigation.navigate('TelaCards')
}

const SignUp = props =>{
    props.navigation.navigate('SignUp')
}


const Login = props => {

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
                        autoCapitalize='none'
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
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                <TouchableOpacity
                onPress={UpdateSecureTextEntry}>
                    <Feather
                        name="eye"
                        color="#4ea3fd"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                    <Text style={{alignSelf:'center', paddingBottom:25, fontSize:15, color:'#024a97', textDecorationLine:'underline'}}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => TelaCards(props)}>
                            <Text style={styles.textSign}>ENTRAR</Text>
                            <Feather
                                name="log-in"
                                size={15}
                                color='white' style={{paddingLeft:10}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signIn1} onPress={() => SignUp (props)}>
                            <Text style={{fontSize:20, alignContent:'center', color:'#4ea3fd'}}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login