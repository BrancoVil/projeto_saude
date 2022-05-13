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

const TelaCadastro = () => {

    return(
        <View style={styles.button}>
                    <LinearGradient
                        colors={['#205DB8', '#729fe2']}
                        style={styles.signIn}
                    >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TelaCadastro')}
                    >
                        <Text style={styles.textSign}>CADASTRAR</Text>
                    </TouchableOpacity>
                    </LinearGradient>
                    <View style={styles.button}>
                    <LinearGradient
                        colors={['#205DB8', '#729fe2']}
                        style={styles.signIn}
                    >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TelaCadastro')}
                    >
                        <Text style={styles.textSign}>LISTAR</Text>
                    </TouchableOpacity>
                    </LinearGradient>
        </View>
        </View>
    )
}

export default TelaCadastro