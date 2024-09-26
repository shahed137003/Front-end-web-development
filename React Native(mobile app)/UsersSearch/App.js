import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Card from './screens/Card';
import User from './screens/User';
import { NavigationContainer } from '@react-navigation/native'; // Correct import for NavigationContainer
import { createStackNavigator } from '@react-navigation/stack'; // Correct import for createStackNavigator
import Users from './screens/Users';

const Stack = createStackNavigator(); // Declare the Stack variable here

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={Card} />
        <Stack.Screen name="user" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}