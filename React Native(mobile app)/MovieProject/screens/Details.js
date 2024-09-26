import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {
  const { params } = useRoute(); // Get the route object from navigation
  const { id } = params; // Destructure the 'id' from params
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`) // Fetch the specific movie by id
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        setMovie(data); // Set the movie directly
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle any errors
      });
  }, [id]);

  if (!movie) return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.label}>Genre ID:</Text> {movie.genres.map(genre => genre.name).join(', ')} {/* Display genre names */}
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>ID:</Text> {movie.id}
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Original Language:</Text> {movie.original_language}
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Overview:</Text> {movie.overview}
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Popularity:</Text> {movie.popularity}
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Video Available:</Text> {movie.video ? 'Yes' : 'No'}
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Vote Average:</Text> {movie.vote_average}
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Vote Count:</Text> {movie.vote_count}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  text: {
    lineHeight: 22,
    marginBottom: 10,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
