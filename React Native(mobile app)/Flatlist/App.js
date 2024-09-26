import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Box from './Box';
export default function App() {
  return (
  <View style={styles.container}>
    <Text style={styles.header}>Here are some boxes of different colors</Text>
  
    <Box colorName="Cyan" hexCode="#2aa198"></Box>
    <Box colorName="Blue" hexCode="#268bd2"></Box>
    <Box colorName="Magenta" hexCode="#d33682"></Box>
    <Box colorName="Orange" hexCode="#cb4b16"></Box>
  </View>
  );
}

