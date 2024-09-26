import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Search({ searchWord }) {
  const [word, setWord] = useState('');

  const handleChange = (text) => {
    setWord(text);
    searchWord(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search....'
        value={word}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 8,
  },
});