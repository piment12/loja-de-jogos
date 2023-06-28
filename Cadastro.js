import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import config  from './config/config.json';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './Styles';
import * as Device from 'expo-device';




export default function Cadastro({  }) {
    
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    async function registerUser()
    {
        let reqs = await fetch(config.urlRootNode+'create',{
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                emailUser: email,
                senhaUser: senha,
            })
        });
    }

    return (
        <View style={styles.textNome}>
            <TextInput
                placeholder="Nome"
                onChangeText={(text)=>setUser(text)}
            />
            <TextInput
                placeholder="Email"
                onChangeText={(text)=>setEmail(text)}
            />
            <TextInput
                placeholder="Senha"
                onChangeText={(text)=>setSenha(text)}
            />
            <TouchableOpacity onPress={registerUser}>
                <Text>Enviar</Text>
            </TouchableOpacity>

        </View>
    );
};
