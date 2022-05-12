import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/Login';
import TelaCadastro from './screens/TelaCadastro';

import { createStackNavigator } from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';

function NotificationsScreen() {
  const navigation = useNavigation(); 
  return(
  <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
  );
  }

export default function App() {
  return (
    <>
      <Login/>

      <TelaCadastro/>
      
      <StatusBar/>
    </>
  );
}

