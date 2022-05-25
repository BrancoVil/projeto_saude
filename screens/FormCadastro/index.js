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
                <Text style={styles.text_footer}>Nome</Text>
                    <TextInput
                        placeholder="Preencha o campo"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                <Text style={styles.text_footer}>CPF</Text>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Preencha o campo"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                <Text style={styles.text_footer}>Cartão do Sus</Text>
                    <TextInput
                        placeholder="Preencha o campo"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                <Text style={styles.text_footer}>Endereço</Text>
                    <TextInput
                        placeholder="Preencha o campo"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                <Text style={styles.text_footer}>Atendente</Text>
                    <TextInput
                        placeholder="Preencha o campo"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                <Text style={styles.text_footer}>Idade</Text>
                    <TextInput
                        placeholder="Preencha o campo"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                <View style={styles.gradient}>
                <LinearGradient
                        colors={['#205DB8', '#729fe2']}
                        style={styles.signIn}>
                    <TouchableOpacity
                    onPress={() => TelaPaciente(props) }>
                        <Text style={styles.textSign}>CADASTRAR</Text>
                    </TouchableOpacity>
                </LinearGradient>
                </View>
            </ScrollView>
    )
}

export default FormCadastro