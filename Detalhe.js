import * as React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Alert } from 'react-native';


import styles from './Styles';

export default function Detalhe({ route }) {

  const showAlert = () => {
    Alert.alert(
      'Compras',
      'Item adicionado no carrinho',
      [
        {
          text: 'OK',
          onPress: () => console.log(''),
          style: 'cancel'
        }
      ],
      { cancelable: true }
    );
  };
  return (
    <ScrollView>
      <View style={styles.containe2}>
        <Text style={styles.texto2}>{route.params.nome}</Text>
        <Image style={styles.imagem2} source={route.params.imagem} />
        <Text style={styles.descricao}>{route.params.descricao}</Text>
        <TouchableOpacity onPress={showAlert}>
          <Text style={styles.compre}>{route.params.compre}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}