import React from "react";
import { View } from "react-native-animatable";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import TelaBuscar from "../screens/TelaBuscar";
import FormCadastro from "../screens/FormCadastro";
import ListarPacientes from "../screens/ListaPacientes";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Buscar Pacientes" 
            component={TelaBuscar} 
            options={{headerShown:false, tabBarButton: () => (
                <View style={{width:0, height:0}}></View>
            ),}}/>
            <Tab.Screen name="Cadastrar Pacientes" 
            component={FormCadastro} 
            options={{headerShown:false}}/>
            <Tab.Screen name="Listar Pacientes" 
            component={ListarPacientes} 
            options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}