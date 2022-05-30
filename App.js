import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/Login';
import ListarPacientes from './screens/ListaPacientes';
import TelaBuscar from './screens/TelaBuscar';
import FormCadastro from './screens/FormConsulta';
import TelaPaciente from './screens/TelaPaciente';
import ConsultaPaciente from './screens/ConsultaPaciente';

import { createStackNavigator } from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Routes';
import Routes2 from './src/components/Routes2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab=  createBottomTabNavigator();

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
        name='ListarPacientes'
        component={ListarPacientes}/>
        <Stack.Screen
        name="TelaBuscar" 
        component={Routes} 
        options={{title: 'Busca e cadastro',
        headerStyle:{backgroundColor:'#ffb246'}, 
        headerTintColor:'#fff',
        headerBackVisible:false
        }}/>
        <Stack.Screen 
        name="FormCadastro" 
        component={FormCadastro} 
        options={{title: 'Cadastrar informações',
        headerStyle:{backgroundColor:'#ffb246'}, 
        headerTitleAlign:"center",
        headerTintColor:'#fff'
        }}/>
        <Stack.Screen
        name="TelaPaciente"
        component={Routes2}
        options={{title: 'Paciente cadastrado',
        headerStyle:{backgroundColor:'#ffb246'},
        headerTintColor:'#fff'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

