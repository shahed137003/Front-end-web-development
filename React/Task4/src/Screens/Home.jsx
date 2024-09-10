import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import Movies from './Movies';
import AddMovie from './AddMovie';

function Movie({results}) {

  // Function to add a new movie

  if (!results) return <div>Loading.....</div>;

  return (
    <div>
      {/* Render AddMovie form and pass the addMovie function */}
      

      {/* Map through the results and display each movie */}
      {results.map((movie) => (
        <Movies key={movie.id} {...movie} />
      ))}
{/* <AddMovie addMovie={addMovie} /> */}
      {/* <AddMovieForm addMovie={addMovie} /> */}
    </div>
  );
}

export default memo(Movie);
