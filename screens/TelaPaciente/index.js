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


const TelaPaciente = props => {
    return(
        <View style={styles.containerusuario}>
            <View style={styles.cardusuario}>
              <Feather
              name="user"
              size={105}
              color='#4ea3fd'/>   
            </View>
            <View style={{position:'absolute', width:'60%', marginLeft:160, marginTop:52 }}>
                  <TextInput style={styles.textinputshadow}/>
                  <TextInput style={styles.textinputshadow}/>
            </View>
            <View style={styles.cardconsulta}>
                <Text style={{alignSelf:'center', marginTop:15, fontSize:16, color:'#4ea3fd'}}>Informações de consulta</Text>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:40}}/>
                <TextInput style={{backgroundColor:'#f2f2f2', borderRadius:30, marginTop:10, height:90}}/>
            </View>   
        </View>
    )
}

export default TelaPaciente
