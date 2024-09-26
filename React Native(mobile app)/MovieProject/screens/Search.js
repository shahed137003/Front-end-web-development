import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Search({ searchWord }) {
  const [word, setWord] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (text) => {
    setWord(text);
    searchWord(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
       style={[styles.input, isFocused && styles.inputFocused]} 
       onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
    backgroundColor: '#fff', // Background color for the input
    color: '#333', // Text color
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 2, // For Android shadow effect
  },
  
  inputFocused: {
    borderColor: 'red', // Change border color when focused
    backgroundColor: '#f0f8ff', // Light background on focus
  },
});