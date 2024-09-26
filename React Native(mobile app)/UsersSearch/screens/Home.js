import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import Users from './Users';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Users />
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