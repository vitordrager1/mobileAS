import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, View, Text, Alert, Image } from "react-native";
import MyButton from "../components/MyButton";
import executeLogin from "../components/UserLogin";
import UserRegister from "../components/UserRegister"
//Rota: https://tamagochiapi-clpsampedro.b4a.run
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {
    height: 50,
    width: 250,
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
  },
  senha: {
    flexDirection: "row",
  },
  image: {
    width: 400,
    height: 100
  }
});

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [useSecurity, setUseSecurity] = useState<boolean>(true);

  const styleButton = {
    width: 150,
    backgroundColor: '#274383',
    height: 60,
    borderRadius: 10,
    margin: 20,
    color: '#fff'
  }

  const validateLogin = () => {
    if (!email || !password) {
        Alert.alert('Erro', 'Informe o Login e a Senha para se conectar', [
        { text: 'OK', onPress: () => console.log('Ok') },
        ]);

    }
    else {
        executeLogin({ navigation }, {email}, {password});
        
    }
}

const validateRegister = () => {
  if (password.length <= 6) {
    Alert.alert('Erro', 'A senha deve ser maior que 6 dígitos', [
      { text: 'OK', onPress: () => console.log('Ok') },
    ]);
  } else {
    UserRegister({email}, {password});
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../images/pxfuel.jpg')} style={styles.image} />
      <TextInput value={email} style={styles.input} placeholder="Usuário" onChangeText={setEmail} />
      <TextInput value={password} secureTextEntry={useSecurity} style={styles.input} placeholder="Senha" onChangeText={setPassword} />

      <MyButton title="Login" onPressButton={validateLogin} containerStyle={styleButton} />
      <MyButton title="Registrar" onPressButton={validateRegister} containerStyle={styleButton} />
    </SafeAreaView>
  );
};

export default Login;