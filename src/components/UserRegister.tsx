import axios from "axios";
import { Alert } from "react-native";

type email = {
    email: string,
}
type password = {
    password: string
}

const UserRegister = async ({email}:email, {password}:password) => {
  try {
    const { data } = await axios.post('https://tamagochiapi-clpsampedro.b4a.run/register', {
      email: email,
      password: password,
    });
    Alert.alert('Sucesso', `Precione OK`, [
      { text: 'OK', onPress: () => console.log('Ok') },
    ]);
  } catch (error) {
    if(error = 500){
      Alert.alert('Erro, Usuário já cadastrado!', `${error}`, [
          { text: 'ok', onPress: () => console.log('Ok') },
        ]);
  }else{
    Alert.alert('Erro', `${error}`, [
      { text: 'Ok', onPress: () => console.log('Ok') },
    ]);
  }}
};

export default UserRegister