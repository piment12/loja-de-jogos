import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './Cadastro';
import Loja from './Loja';
import Banner from './Banner';
import Detalhe from './Detalhe';





const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Inicio" component={Loja} Option={{ headerTransparent: true, title: '', }} />
        <Stack.Screen name="Cadastro" component={Cadastro} Option={{ headerTransparent: true, title: '', }} />
        <Stack.Screen name="Banner" component={Banner} Option={{ headerTransparent: true, title: '', }} />
        <Stack.Screen name="Detalhe" component={Detalhe} Option={{ headerTransparent: true, title: '', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






