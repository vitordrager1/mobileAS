//Recebe o email e a senha do usuário para cadastrar junto da API
//Retorna sucesso ou erro.
import axios from "axios";
import { Alert } from "react-native";

type email = {
    email: string,
}
type password = {
    password: string
}

const UserRegister = async ({ navigation }: any,{email}:email, {password}:password) => {
  try {
    const { data } = await axios.post('https://tamagochiapi-clpsampedro.b4a.run/register', {
      email: email,
      password: password,
    });
    Alert.alert('Usuário cadastrado com sucesso.', `Precione OK`, [
      { text: 'OK', onPress: () => console.log('Ok') },
    ]);
    navigation.navigate("Home")
  } catch (error) {
    if(error = 500){
      Alert.alert('Erro ao tentar realizar o registro, tente novamente mais tarde', `${error}`, [
          { text: 'ok', onPress: () => console.log('Ok') },
        ]);
  }else{
    Alert.alert('Erro', `${error}`, [
      { text: 'Ok', onPress: () => console.log('Ok') },
    ]);
  }}
};

export default UserRegister