import React from "react";
import { View } from "react-native-animatable";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather';
import TelaPaciente from "../../screens/TelaPaciente";
import ConsultaPaciente from "../../screens/ConsultaPaciente";
import FormCadastro from '../../screens/FormConsulta';
import EditarPaciente from "../../screens/EditarPaciente";



const Tab = createBottomTabNavigator();

export default function Routes2() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Paciente Cadastrado"
        component={TelaPaciente}
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ), tabBarActiveTintColor: '#ffb246',
        }} />
      <Tab.Screen name="Editar"
        component={EditarPaciente}
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name="edit" color={color} size={size} />
          ), tabBarActiveTintColor: '#ffb246',
        }} />
      <Tab.Screen name="Consulta"
        component={FormCadastro}
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name="plus-square" color={color} size={size} />
          ), tabBarActiveTintColor: '#ffb246',
        }} />
      <Tab.Screen name="Encaminhar"
        component={ConsultaPaciente}
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name="share" color={color} size={size} />
          ), tabBarActiveTintColor: '#ffb246',
        }} />
    </Tab.Navigator>
  )
}


//tabBarButton: () => (
  //<View style={{width:0, height:0}}></View>
//)