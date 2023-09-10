import React, {useState} from 'react';
import {TextInput, SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
    },

    login: {
        fontSize: 30,
        fontFamily: 'Arial',
        textAlign: 'center'
    },

    btLogin: {
        backgroundColor: '#464646',
        width: '60%',
        margin: 'auto'
    }
});

const Form = ({navigation}: any) => {
    const [text, setText] = useState<string>();
    const [user, setUser] = useState<string>();
    const [hash, setHash] = useState<string>();
    const [hasError, setHasError] = useState(false);

    const onChangeUser = (value : string) => {
        setUser(value)
    };

    const onChangeHash = (value: string) => { // Adicionar as validações da senha
        if (value.length >= 6) {
            setHasError(false);
        } else {
            setHasError(true);
        }
        setText(value);
        setHash(value);
    };

    return (
        <SafeAreaView>
            <Text >Usuário</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUser}
            />
            <Text>Senha</Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={onChangeHash}
            />
            {hasError ? <Text>A senha deve conter mais de 6 digitos</Text> : null}

            <Button 
                onPress={() => {
                    navigation.navigate('Home', {id: 1});
                }}
                title="Conectar"
            />
        </SafeAreaView>
    );
};

export default Form;