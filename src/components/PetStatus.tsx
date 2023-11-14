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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statText: {
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Brincar = ({route, navigation}: any) => {
  const [pet, setPet] = useState<any | null>(null);
  const {id} = route.params;

  const getPetData = async () => {
    try {
      const token = await getToken();
      const {data} = await axios.get(
        'https://tamagochiapi-clpsampedro.b4a.run/pet/' + id,
        {headers: {'x-access-token': token}},
      );
      console.log(data);
      setPet(data.data);
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
  }, []);

  const handlePlay = async () => {
    const token = await getToken();
    try {
        const response = await axios.get(
            'https://tamagochiapi-clpsampedro.b4a.run/pet/' + id + '/play',
            {headers: {'x-access-token': token}},
          );
    //   const response = await axios.post(
    //     `https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/play`,
    //   );
      setPet(response.data);
    } catch (error:any) {
      Alert.alert('erro', error);
    }
  };

  const handleFeed = async () => {
    const response = await axios.post(
      `https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/food`,
    );
    setPet(response.data);
  };

  const handleRest = async () => {
    const response = await axios.post(
      `https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/rest`,
    );
    setPet(response.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Status do PET</Text>
      <View style={styles.stats}>
        {pet && <Text style={styles.statText}>Fome: {pet.foodLevel}%</Text>}
        {pet && <Text style={styles.statText}>Alegria: {pet.funLevel}%</Text>}
        {pet && <Text style={styles.statText}>Energia: {pet.restLevel}%</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Brincar" onPress={handlePlay} />
        <Button title="Alimentar" onPress={handleFeed} />
        <Button title="Descansar" onPress={handleRest} />
      </View>
    </View>
  );
};

export default Brincar;
