import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'; // Correct import for createStackNavigator
import Home from '../screens/Home'
import Details from '../screens/Details'
import Movie from '../screens/Movie'
import DrawNavigation from './DrawNavigation';
export default function StackNavigation() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'red', // Change to your desired background color
      },
      headerTintColor: '#fff', // Text color
      headerTitleStyle: {
        fontWeight: 'bold', // Title font weight
      },
    }}>
    <Stack.Screen name="Draw" component={DrawNavigation} 
    options={{ headerShown: false }} // Hide the header
    />
    <Stack.Screen name="details" component={Details} />
    <Stack.Screen name="movie" component={Movie} />
  </Stack.Navigator>
  )
}
