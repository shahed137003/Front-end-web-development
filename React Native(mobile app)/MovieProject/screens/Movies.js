import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Movie from './Movie';
// import axios from 'axios';
import Search from './Search'; // Assuming Search component is in a separate file

export default function Movies() {
  const [MovieArr, setMovie] = useState(null);
  const [filteredArr, setFilterArr] = useState([]);

  // Fetch movies on component mount
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
      .then((response) => response.json())  // Parse JSON from the response
      .then((data) => {
        setMovie(data.results);             // Set movie array
        // setFilterArr(data.results);         // Initialize filtered array with all movies
      })
      .catch((error) => {
        console.error("Error fetching data:", error);  // Handle any errors
      });
  }, []);
  

  // Search function to filter movies by title
  const searchWord = (word) => {
    setFilterArr(
      MovieArr.filter((movie) =>
        movie.original_title.toLowerCase().includes(word.toLowerCase())
      )
    );
  };

  // If the movies array is not yet loaded, display a loading message
  if (!MovieArr) return <View><Text>Loading.....</Text></View>;

  return (
    <View>
      <Search searchWord={searchWord} />
      <Movie movieArr={filteredArr} />
    </View>
  );
}
