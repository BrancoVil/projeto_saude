import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/Login';
import TelaCadastro from './screens/TelaCadastro';

import { createStackNavigator } from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  return (
    <>
      <Login/>

      <StatusBar/>
    </>
  );
}

