import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import MovieContextProvider from './Context/MovieContextProvider';

export default function App() {
 
  return (
    <MovieContextProvider>
    <NavigationContainer>
<StackNavigation></StackNavigation>
  </NavigationContainer>
  </MovieContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,            
    backgroundColor: 'black',  // Set the background color to black
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',  // White text to contrast with black background
    fontSize: 20,
  },
});