import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, View, Text, Alert, Image, ImageBackground, Pressable} from "react-native";
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
    width: '100%',
    height: 700
  },
  loginContainer: {
    opacity: 0.8,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 100,
    borderRadius: 10,
  },
  inputContainer: {
    backgroundColor: '#FFC9DE',
    borderRadius: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 120,
    backgroundColor: '#FFA6C9',
    height: 60,
    borderRadius: 10,
    margin: 20,
    color: '#000',
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffff',
    justifyContent: 'center',
    textAlign: 'center'
  },
});

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [useSecurity, setUseSecurity] = useState<boolean>(true);

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

const registerScreen = () => {
  navigation.navigate("Register")
}

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../images/pxfuel.jpg')} style={styles.image}>
        <View style={styles.loginContainer}>
          <View style={styles.inputContainer}>
            <TextInput value={email} style={styles.input} placeholder="E-mail" onChangeText={setEmail} />
            <TextInput value={password} secureTextEntry={useSecurity} style={styles.input} placeholder="Senha" onChangeText={setPassword} />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button} 
              onPress={() => {validateLogin()}}>
              <Text style={styles.buttonText}>Conectar-se</Text>
            </Pressable>
            <Pressable
              style={styles.button} 
              onPress={() => {registerScreen()}}>
              <Text style={styles.buttonText}>Registrar</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;