import { View,Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';
import Search from './Search'; // Assuming Search component is in a separate file

export default function Users() {
  const [results, setResults] = useState(null);
  const [filteredArr, setFilterArr] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setResults(res.data))
  }, []); // Empty dependency array ensures it runs only once

  const searchWord = (word) => {
    setFilterArr(results.filter((std) => std.name.toLowerCase().includes(word.toLowerCase())));
  }

  if (!results) return <View><Text>Loading.....</Text></View>;

  return (
    <View>
      <Search searchWord={searchWord} />
      <User userArr={filteredArr} />
    </View>
  )
}