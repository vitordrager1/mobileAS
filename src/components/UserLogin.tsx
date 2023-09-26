import axios from "axios";
import { Alert } from "react-native";

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
        navigation.navigate("Home")
        console.log('Resposta do servidor:', data);
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