import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, TextInput, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Banner from './Banner';
import styles from './Styles';
import { game } from './Base';
import Detalhe from './Detalhe';
import { Tab } from 'react-native-elements';

  

export default function Loja({ navigation }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <ScrollView>
      <Button
        title="Cadastre"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}
      />
      <TextInput style={styles.buscar}></TextInput>
      <View style={styles.container}>
        {game.map(item =>
          <TouchableOpacity key={item.nome} onPress={() => navigation.navigate('Detalhe', { ...item })}>
            <Banner props={item} />
          </TouchableOpacity>
        )}
        
      </View>
    </ScrollView>
  );
}









