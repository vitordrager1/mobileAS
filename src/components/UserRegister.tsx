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
    Alert.alert('Erro', `${error}`, [
      { text: 'Ok', onPress: () => console.log('Ok') },
    ]);
  }
};

export default UserRegister