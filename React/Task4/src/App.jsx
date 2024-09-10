import React, { useState, useEffect, memo } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import  Home from './Screens/Home'


function App() {
  // import ContactUs from './Screens/ContactUs';
// import About from './Screens/About';
  // Use useState to manage the results state
  const [results, setResults] = useState(null);

  // Fetch movies when the component mounts (equivalent of componentDidMount)
  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7')
      .then((res) => setResults(res.data.results))
      
  }, []); // Empty dependency array ensures it runs only once

const addMovie = (newMovie) => {
  setResults([...results, newMovie]);
};
  return (
    <>

      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      
        <Route path='/' element={<Home results={results}></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}> </Route>
        <Route path='/addmovie' element={<AddMovie addMovie={addMovie}></AddMovie>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
        <Route path='/movies/:id' element={<MovieDetails></MovieDetails>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
import About from './Screens/About';
import ContactUs from './Screens/ContactUs';
import NotFound from './Screens/NotFound';
import NavBar from './Screens/NavBar';
import AddMovie from './Screens/AddMovie';
import MovieDetails from './Screens/MovieDetails';

export default App
