import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import {
  Restaurant,
  Suggestion,
  Success,
  Menus,
  MenuDetails,
  PastOrders
} from './screens'
import Tabs from './navigation/Tabs'
import { LogBox } from 'react-native';

const Stack=createStackNavigator()

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown:false
          }
        }
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='Restaurant' component={Restaurant} />
        <Stack.Screen name='Suggestion' component={Suggestion} />
        <Stack.Screen name='Success' component={Success} />
        <Stack.Screen name='MenuDetails' component={MenuDetails} />
        <Stack.Screen name='Menus' component={Menus} />
        <Stack.Screen name="PastOrders" component={PastOrders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}