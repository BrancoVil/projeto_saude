import React from "react";
import { View } from "react-native-animatable";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import TelaPaciente from "../../screens/TelaPaciente";
import ConsultaPaciente from "../../screens/ConsultaPaciente";



const Tab = createBottomTabNavigator();

export default function Routes2(){
    return(
    <Tab.Navigator>
            <Tab.Screen name="Paciente Cadastrado" 
            component={TelaPaciente} 
            options={{headerShown:false, tabBarButton: () => (
                <View style={{width:0, height:0}}></View>
            ),}}/>
            <Tab.Screen name="Editar" 
            component={ConsultaPaciente} 
            options={{headerShown:false}}/>
            <Tab.Screen name="Consulta" 
            component={ConsultaPaciente} 
            options={{headerShown:false}}/>
            <Tab.Screen name="Encaminhar" 
            component={ConsultaPaciente} 
            options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}