import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Alert,
} from 'react-native';
import axios from 'axios';
const imagem1 = require ('../images/petLulu.png')
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#464678',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 30,
    height: 100,
    backgroundColor: '#000'
  },
  statText: {
    
    fontFamily: 'Arial',
    fontSize: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFA6C9',
    width: '100%',
    margin: 'auto',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 800,
  },
  button: {
    height: 35,
    width: 100,
    margin: 5,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#5D25E6',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#ffff',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  petImage: {
    width: '50%',
    height: 300,
    margin:'auto'
    
  },
  viewImage: {
    width: '100%',
    margin: 'auto',
    marginLeft: 100,
    
  }
});

type ShowPet = {
    pet: {
      id: Number;
      name: String;
      life: Number;
      createdAt: Date;
      funLevel: Number;
    };
  };

const Brincar = ({route, navigation}: any) => {
  const [pet, setPet] = useState([]);
  const {id} = route.params;

  const getPetData = async () => {
    try {
      const token = await getToken();
      const {data} = await axios.get(
        'https://tamagochiapi-clpsampedro.b4a.run/pet/' + id,
        {headers: {'x-access-token': token}},
      );
      console.log(data);
      setPet(data);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar dados do pet!');
      navigation.goBack();
    }
  };

  const getToken = async () => {
    try {
      let userToken = (await AsyncStorage.getItem('token')) || 'none';
      return userToken;
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Erro ao obter token de autenticação!');
    }
  };

  useEffect(() => {
    getPetData();
    console.log(pet)
  }, []);

  const handleJogar = async () => {
    const token = await getToken();
    try {
      const response = await axios.post(
        'https://tamagochiapi-clpsampedro.b4a.run/pet/' + id + '/play',
        {headers: {'x-access-token': token}},
      );
      //   const response = await axios.post(
      //     `https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/play`,
      //   );
      setPet(response.data);
    } catch (error: any) {
      Alert.alert('erro', error);
    }
  };

  const handleAlimentar = async () => {
    const response = await axios.post(
      `https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/food`,
    );
    setPet(response.data);
  };

  const handleDescansar = async () => {
    const response = await axios.post(
      `https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/rest`,
    );
    setPet(response.data);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/pxfuel.jpg')}
        style={styles.image}>
            <View style={styles.viewImage}>

            <Image style={styles.petImage} source={imagem1}></Image>
            </View>
        <View style={styles.stats}>
          {pet && <Text style={styles.statText}>Fome: {pet.foodLevel}%</Text>}
          {pet && <Text style={styles.statText}>Alegria: {pet.funLevel}%</Text>}
          {pet && (
            <Text style={styles.statText}>Energia: {pet.restLevel}%</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleJogar} style={styles.button}>
            <Text style={styles.buttonText}>Jogar</Text>
          </Pressable>
          <Pressable onPress={handleAlimentar} style={styles.button}>
            <Text style={styles.buttonText}>Ao mossar</Text>
          </Pressable>
          <Pressable onPress={handleDescansar} style={styles.button}>
            <Text style={styles.buttonText}>A mimir</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Brincar;
