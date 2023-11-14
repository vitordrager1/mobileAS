import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import PetRegister from './src/components/PetRegister';
import PetEdition from './src/components/PetEdition';
import PetStatus from './src/components/PetStatus'
function App(): JSX.Element {
  type InputProps = {
    petId: Number
  }
  const Stack = createNativeStackNavigator();
  const StackEdition = createNativeStackNavigator<InputProps>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PetRegister" component={PetRegister} />
        <Stack.Screen name="PetStatus" component={PetStatus} />
        <Stack.Screen name="PetEdition" component={PetEdition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;