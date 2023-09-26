import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

const Home = ({route}: any) => {
  const {params} = route;
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Você está logado</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;