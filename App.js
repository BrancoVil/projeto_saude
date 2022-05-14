import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/Login';
import TelaCadastro from './screens/TelaCadastro';

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
        name="TelaCadastro" 
        component={TelaCadastro} 
        options={{title: 'Pacientes',
        headerStyle:{backgroundColor:'#205DB8'}, 
        headerTitleAlign:"center",
        headerTintColor:'#fff'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

