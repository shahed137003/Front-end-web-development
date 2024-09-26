import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import Movies from './Movies';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Movies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeScreenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});