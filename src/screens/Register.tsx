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
    height: 700,
  },
  registerContainer: {
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

const Register = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [useSecurity, setUseSecurity] = useState<boolean>(true);

  const styleButton = {
    width: 150,
    backgroundColor: '#274383',
    height: 60,
    borderRadius: 10,
    margin: 20,
    color: '#fff'
  }

const validateRegister = () => {
  if(email.length <= 0) {
    Alert.alert('Erro', 'Preencha o campo e-mail', [
      { text: 'OK', onPress: () => console.log('Ok') },
    ]);
    return 0
  }
  if (password.length <= 6) {
    Alert.alert('Erro', 'A senha deve ser maior que 6 dígitos', [
      { text: 'OK', onPress: () => console.log('Ok') },
    ]);
    return 0
  } 
  if (password !== password2) {
    Alert.alert('Erro', 'As senhas informadas devem ser iguais', [
      { text: 'OK', onPress: () => console.log('Ok') },
    ]);
    return 0
  } else {
    UserRegister({ navigation },{email}, {password});
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../images/pxfuel.jpg')} style={styles.image}>
        <View style={styles.registerContainer}>
          <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput value={email} style={styles.input} placeholder="E-mail" onChangeText={setEmail} />
            <Text>Senha</Text>
            <TextInput value={password} secureTextEntry={useSecurity} style={styles.input} placeholder="Senha" onChangeText={setPassword} />
            <Text>Confirmar senha</Text>
            <TextInput value={password2} secureTextEntry={useSecurity} style={styles.input} placeholder="Confirmar senha" onChangeText={setPassword2} />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button} 
              onPress={() => {validateRegister()}}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
          </View>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;