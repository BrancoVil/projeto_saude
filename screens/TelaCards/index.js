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

const FormCadastro = props =>{
    props.navigation.navigate('FormCadastro')
}

const TelaCards = props => {

    return(
    <ScrollView style={{ backgroundColor:'#F5F5F5',}}>
    <View style={styles.card}>
        <TouchableOpacity onPress={() => FormCadastro(props) }>
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', position:'absolute', backgroundColor:'black'}}>
            <Feather 
            name="user-plus"
            size={30}
            color='#4ea3fd'
            style={{alignSelf:'center', justifyContent:'center'}}/>
                    <Text style={styles.textSign}>CADASTRAR</Text>
                    </View>
        </TouchableOpacity>      
    </View>
        <View style={styles.card1}>
        <Feather 
        name="list"
        size={45}
        color='#4ea3fd'
        style={{alignSelf:'center', paddingTop:30}}/>
                <TouchableOpacity>
                        <Text style={styles.textSign}>LISTAR</Text>
                
                        <Text style={styles.textSignf}></Text>
                    <View style={{alignItems:'flex-end', paddingRight:20, paddingTop:10}}>
                        <TouchableOpacity style={{borderRadius:40, width:'20%', backgroundColor:'#4ea3fd',}}>
                        </TouchableOpacity>   
                    </View>
                </TouchableOpacity>
        </View>
    </ScrollView>
    )
}

export default TelaCards