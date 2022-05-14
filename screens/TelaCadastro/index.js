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

const FormCadastro = props =>{
    props.navigation.navigate('FormCadastro')
}

const TelaCadastro = props => {

    return(
    <View style={styles.button}>
            <LinearGradient
                        colors={['#205DB8', '#729fe2']}
                        style={styles.signIn}>
                <TouchableOpacity onPress={() => FormCadastro(props) }>
                        <Text style={styles.textSign}>CADASTRAR</Text>
                </TouchableOpacity>
            </LinearGradient>
        <View style={styles.button2}>
            <LinearGradient
                        colors={['#205DB8', '#729fe2']}
                        style={styles.signIn1}>
                    <TouchableOpacity>
                        <Text style={styles.textSign}>LISTAR</Text>
                    </TouchableOpacity>
            </LinearGradient>
        </View>
    </View>
    )
}

export default TelaCadastro