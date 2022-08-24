import React from "react";
import { StyleSheet, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import TelaBuscar from "../screens/TelaBuscar";
import CadastrarPaciente from "../screens/CadastrarPaciente";
import ListarPacientes from "../screens/ListaPacientes";
import TelaPaciente from "../screens/TelaPaciente";


const Tab = createBottomTabNavigator();


export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Buscar"
        component={TelaBuscar}
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ), tabBarActiveTintColor: '#ffb246',
        }} />

      <Tab.Screen name="Cadastrar Pacientes"
        component={CadastrarPaciente}
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name="user-plus" color={color} size={size} />
          ), tabBarActiveTintColor: '#ffb246',
        }} />
      <Tab.Screen name="ListarPacientes"
        component={ListarPacientes}
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ), tabBarActiveTintColor: '#ffb246'
        }} />
      
    </Tab.Navigator>

  )
}