import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({navigation}:Props) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');


  const handleLogin = () => {
    console.log(email, senha)
    if (email.includes('@') && senha.length > 6 && nome.length > 0) {
      console.log("☑️Acesso autorizado para:", email);
      // Futuramente: Navegar para a Home
       navigation.navigate ('Dashboard', {
        userName: nome,
        volutarioId: 'ID-'+ Math.random().toString(),
        userEmail: email});     
    } else {
      console.log("❌ Falha no login: E-mail inválido ou senha muito curta.");
    }
  };


return (

    <View style={styles.container}>
    <Image source={require("../assets/images/download.png")}
      style={styles.img} />
    <Text style={styles.title}>Bem vindo ao ONG connect</Text>
    <Text style={styles.subtitle}>"Mais visibilidade para quem faz a diferença."</Text>

    <Text style={styles.title}>Nome:</Text>
    <TextInput
      style={styles.textInput}
      autoCapitalize="none" 
      placeholder="Digite seu Nome" 
      onChangeText={setNome}
      value={nome}/>

    <Text style={styles.title}>Email:</Text>
    <TextInput
      style={styles.textInput}
      keyboardType="email-address" 
      autoCapitalize="none" 
      placeholder="Digite seu Email" 
      onChangeText={setEmail}
      value={email}/>

    <Text style={styles.title}>Senha:</Text>
    <TextInput style={styles.textInput}
      secureTextEntry={true}
      placeholder="Digite Sua Senha" 
      onChangeText={setSenha}
      value={senha}/>

    <TouchableOpacity style={styles.bottom} onPress={handleLogin}>Entrar</TouchableOpacity>

    {/* <TouchableOpacity style={styles.bottom}>Conhecer Projetos</TouchableOpacity>
      <TouchableOpacity style={styles.bottom2}>Login</TouchableOpacity> */}
    </View>
  
);

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d4cfcf',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 250,
    height: 250

  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#115272',
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitle: {
    color: '#19A788',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30
  },
  bottom: {
    backgroundColor: '#20B2AA',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 15,
  },

  bottom2: {
    backgroundColor: 'transparent', // Fundo transparente
    borderWidth: 2,
    borderColor: '#20B2AA', // Borda vermelha
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
  },

  textInput: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 15,
    fontSize: 9,
    backgroundColor: 'white',
    borderRadius: 20,
    color: 'grey',
    width: 300
  }
});
