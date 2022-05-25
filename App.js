import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import TelaCards from './screens/TelaCards';
import FormCadastro from './screens/FormCadastro';
import TelaPaciente from './screens/TelaPaciente';

import { createStackNavigator } from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRouter } from 'react-navigation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        options={{headerShown:false}} 
        name="Login" 
        component={Login}/>
        <Stack.Screen
        options={{headerShown:false}}
        name='SignUp'
        component={SignUp}/>
        <Stack.Screen 
        name="TelaCards" 
        component={TelaCards} 
        options={{title: 'Pacientes',
        headerStyle:{backgroundColor:'#4ea3fd'}, 
        headerTitleAlign:"center",
        headerTintColor:'#fff'
        }}/>
        <Stack.Screen 
        name="FormCadastro" 
        component={FormCadastro} 
        options={{title: 'Cadastrar informações',
        headerStyle:{backgroundColor:'#4ea3fd'}, 
        headerTitleAlign:"center",
        headerTintColor:'#fff'
        }}/>
        <Stack.Screen
        name="TelaPaciente"
        component={TelaPaciente}
        options={{title: 'Informações da consulta',
        headerStyle:{backgroundColor:'#4ea3fd'},
        headerTitleAlign:'center',
        headerTintColor:'#fff'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

