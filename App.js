import React from 'react';
import Login from './screens/Login';
import ListarPacientes from './screens/ListaPacientes';
import FormCadastro from './screens/FormConsulta';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Routes';
import Routes2 from './src/components/Routes2';
import TelaPaciente from './screens/TelaPaciente';


// const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login} />
        
        <Stack.Screen
          name="TelaBuscar"
          component={Routes}
          options={{
            title: 'Busca e cadastro',
            headerStyle: { backgroundColor: '#ffb246' },
            headerTintColor: '#fff',
            headerBackVisible: false
          }} />
       
        <Stack.Screen
          name="TelaPaciente"
          component={TelaPaciente}
          options={{
            title: 'Paciente cadastrado',
            headerStyle: { backgroundColor: '#ffb246' },
            headerTintColor: '#fff'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

