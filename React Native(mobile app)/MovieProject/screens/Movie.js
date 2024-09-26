import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import  {Ionicons}  from '@expo/vector-icons';
import {movieContext } from '../Context/MovieContextProvider';
export default function Movie({ movieArr }) {
  const { navigate } = useNavigation();
  const { favMovie,useFavMovie} = useContext(movieContext);

  return (
    // Wrap everything inside ScrollView for vertical scrolling
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {movieArr.map((u, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.heading}>
            {u.original_title} ({u.adult ? 'An Adult' : 'Not an Adult'})
          </Text>
          
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${u.backdrop_path}` }}
            style={styles.image}
          />
          
          <Text style={styles.text}>
            <Text style={styles.label}>Overview: </Text>{u.overview}
          </Text>
          <View style={styles.containerButt}>
      <TouchableOpacity style={styles.button} onPress={() => navigate('details', u)}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
      <Ionicons name='heart' size={40} color="red" style={styles.icon} onPress={()=>{useFavMovie([...favMovie,u])}}/>
    </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  container: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 5, // Replaces boxShadow for Android
  },
  heading: {
    color: '#2c3e50',
    fontSize: 24,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    lineHeight: 22,
    marginBottom: 10,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
  },
  
  containerButt: {
    flexDirection: 'row',     // Places the button and icon in a row
    alignItems: 'center',      // Align them vertically in the center
    justifyContent: 'space-between', // Adds space between button and icon
    padding: 10,
  },
  button: {
    backgroundColor: 'red',  // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',         // Add shadow for depth (optional)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  buttonText: {
    color: 'white',              // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 15,              // Add margin to the left of the icon
  }
});
