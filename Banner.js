import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles';


export default function Banner({ props }) {
    

    return (
        <View style={styles.bloco}>
            <View style={styles.esq}>
                <Image style={styles.imagem} source={props.imagem} />
            </View>
            <View style={styles.dir}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.tamanho}>{props.tamanho}</Text>
                <Text style={styles.tipo}>{props.tipo}</Text>
            </View>
        </View>
    );
}

