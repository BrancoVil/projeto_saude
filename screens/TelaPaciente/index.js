import React, { useState } from "react";
import {
    View,
    ScrollView,
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




const TelaPaciente = ({route}) => {

    const [cpf, setCpf] = useState([route.cpf]);
    alert(cpf);

    

    return(
        <ScrollView style={styles.containerusuario}>

            <View style={styles.cardusuario}>
              <Feather
              name="user"
              size={105}
              color='#ffb246'/>   
            </View>
            <View style={{position:'absolute', width:'60%', marginTop:52, alignSelf:'flex-end' }}>
                  <Text style={styles.textinputshadow}>{route.cpf}</Text>
                  <Text style={styles.textinputshadow}/>
            </View>
            <View style={styles.cardconsulta}>
                <Text style={{alignSelf:'center', marginTop:15, fontSize:16, color:'white'}}>Informações de consulta</Text>
                <Text style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <Text style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <Text style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <Text style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <Text style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <Text style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:90}}/>
            </View>   
        </ScrollView>
    )
}

export default TelaPaciente
