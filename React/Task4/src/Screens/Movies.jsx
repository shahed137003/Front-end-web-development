// import React, { Component } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
export default function Movies(props) {
  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Arial", sans-serif',
    color: '#333',
  };

  const headingStyle = {
    color: '#2c3e50',
    fontSize: '1.5rem',
    marginBottom: '15px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
  };

  const textStyle = {
    lineHeight: '1.6',
    marginBottom: '10px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };
  const buttonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  };
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        {props.original_title} ({props.adult ? 'An Adult' : 'Not an Adult'})
      </h2>
      
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`}
        alt={props.original_title}
        style={imageStyle}
      />
      
      {/* <p style={textStyle}>
        <span style={labelStyle}>Genre ID:</span> {props.genre_ids[0]}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>ID:</span> {props.id}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Original Language:</span> {props.original_language}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Overview:</span> {props.overview}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Popularity:</span> {props.popularity}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Video Available:</span> {props.video ? 'Yes' : 'No'}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Vote Average:</span> {props.vote_average}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Vote Count:</span> {props.vote_count}
      </p> */}
    <Link to={`/movies/${props.id}`}>
    <button  style={buttonStyle}>Details</button>
    </Link>

    </div>
);
}

