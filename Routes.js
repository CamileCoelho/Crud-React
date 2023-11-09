import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import EditarPlantas from './Telas/EditarPlantas';
import RemoverPlantas from './Telas/RemoverPlantas';
import ListarPlantas from './Telas/ListarPlantas';
import AdicionarPlantas from './Telas/AdicionarPlantas';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Listar'
          component={ListarPlantas}
          options={{ title: 'Lista de Plantas:' }}
        />
        <Stack.Screen
          name='Adicionar'
          component={AdicionarPlantas}
          options={{ title: 'Adicionar Planta:' }}
        />
         <Stack.Screen
          name='Editar'
          component={EditarPlantas}
          options={{ title: 'Editar Planta:' }}
        />
        <Stack.Screen
          name='Remover'
          component={RemoverPlantas}
          options={{ title: 'Remover Planta:' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
