import React from 'react'
import Home from './Home';
import Status from './Status'
import Notifi from "./Notifi"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="Notifi" component={Notifi} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigation