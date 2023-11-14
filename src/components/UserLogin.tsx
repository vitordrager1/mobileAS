//Recebe o email e a senha do usuário e tenta realizar o login junto da API
//Retorna para a home ou erro.
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

type email = {
    email: string,
}
type password = {
    password: string
}

const executeLogin = async ({ navigation }: any,{email}:email, {password}:password) => {
    try {
        const { data } = await axios.post('https://tamagochiapi-clpsampedro.b4a.run/login', {
        email: email,
        password: password,
        });
        try {
            await AsyncStorage.setItem('token', data.token);
            email = ""
            password = ""
            navigation.navigate("Home")
            console.log('Resposta do servidor:', data);
          } catch (error) {
            Alert.alert('Erro', 'Erro ao tentar se conectar! Tente Novamente')
            return
          }
    } catch (error) {
        if(error = 401){
            Alert.alert('Erro, Usuário ou Senha incorretos', `${error}`, [
                { text: 'ok', onPress: () => console.log('Ok') },
              ]);
        }
        console.log('Erro ao fazer login:', error);
    }
};

export default executeLogin