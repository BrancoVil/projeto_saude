import React, { useEffect, useState } from "react";
import {
    View,
    SafeAreaView,
    FlatList,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const ListarPacientes = () => {
    
    const[data, setData] = useState([]);

    const getPaciente = async () => {
        fetch('https://ivfassessoria.com/repositories/api/api/paciente/read.php', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
         },
        })
        .then((response) => response.json())
        .then((responseJson) => (
            setData(responseJson.body)
        ));
    }

    useEffect(() => {
        getPaciente();
    },[])

    return(
        <ScrollView style={styles.container}>
            {Object.values(data.map(paciente => (
            <View style={styles.cardpaciente} key={paciente.id}>
                <Feather
                name="user"
                size={60}
                color={'grey'}
                style={{marginLeft:5, borderRightColor:'#ffb246', borderRightWidth:2, width:63, alignSelf:'center', marginRight:10}}/>
                <View style={{alignSelf:'center', marginBottom:20}}>
                    <Text style={{borderBottomWidth:1, height:30, width:180, borderRadius:10, borderColor:'grey', paddingLeft:15, marginTop:10, fontSize:20}}>{paciente.nomePacientes}</Text>
                    <Text style={{borderBottomWidth:1, height:24, width:180, borderRadius:10, borderColor:'grey', paddingLeft:20, marginTop:15}}>{paciente.cartaoSus}</Text>
                </View>
               <View style={{flexDirection:'column', alignSelf:'center', marginLeft:20 }}>
                <TouchableOpacity style={{backgroundColor:'white', borderRadius:5, borderColor:'#ffb246', borderWidth:1}}>
                <Feather
                name="edit"
                size={25}
                color='#ffb246'
                style={{}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'white', borderRadius:5, borderWidth:1, borderColor:'#ffb246', marginTop:5}}>
                <Feather
                name="eye"
                size={25}
                color='#ffb246'
                style={{}}/>
                </TouchableOpacity>
                </View>
            </View>
            )))}
        </ScrollView>
    )
}
export default ListarPacientes