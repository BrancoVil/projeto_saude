import React from 'react';
import Login from './screens/Login';
import ListarPacientes from './screens/pages/ListaPacientes';
import FormCadastro from './screens/pages/FormConsulta';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Routes';
import TelaPaciente from './screens/pages/TelaPaciente';
import EditarPaciente from './screens/pages/EditarPaciente';
import ListaAtendimento from './screens/pages/ListaAtendimento';
import Encaminhar from './screens/pages/Encaminhar';



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
            headerBackVisible: false,
            
            
          }} />
       
        <Stack.Screen
          name="TelaPaciente"
          component={TelaPaciente}
          options={{
            title: 'Paciente cadastrado',
            headerStyle: { backgroundColor: '#ffb246' },
            headerTintColor: '#fff'
          }} />

        <Stack.Screen
          name="EditarPaciente"
          component={EditarPaciente}
          options={{
            title: 'Editar Paciente',
            headerStyle: { backgroundColor: '#ffb246' },
            headerTintColor: '#fff'
          }} />

        <Stack.Screen
          name="ConsultaPaciente"
          component={FormCadastro}
          options={{
            title: 'Cadastrar Consulta',
            headerStyle: { backgroundColor: '#ffb246' },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen
          name="ListaAtendimento"
          component={ListaAtendimento}
          options={{
            title: 'Atendimentos',
            headerStyle: { backgroundColor: '#ffb246' },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen
          name="Encaminhar"
          component={Encaminhar}
          options={{
            title: 'Encaminhar',
            headerStyle: { backgroundColor: '#ffb246' },
            headerTintColor: '#111'
          }} />

          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

