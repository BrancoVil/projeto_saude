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


const FormCadastro = props => {

    return(
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Atendente</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Usuário"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                </View>
                <Text style={styles.text_footer}>Atendente</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Usuário"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                </View>
                <Text style={styles.text_footer}>Atendente</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Usuário"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                </View>
                <Text style={styles.text_footer}>Atendente</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Usuário"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                </View>
                <Text style={styles.text_footer}>Atendente</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Usuário"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.gradient}>
                <LinearGradient
                        colors={['#205DB8', '#729fe2']}
                        style={styles.signIn}>
                    <TouchableOpacity>
                        <Text style={styles.textSign}>CADASTRAR</Text>
                    </TouchableOpacity>
                </LinearGradient>
                </View>
            </View>
    )
}

export default FormCadastro