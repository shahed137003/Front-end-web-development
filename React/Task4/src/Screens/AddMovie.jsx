import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddMovie({ addMovie }) {
  // State for form fields
  const navigate=useNavigate()
  const [movieDetails, setMovieDetails] = useState({
    original_title: '',
    adult: false,
    backdrop_path: '',
    genre_ids: '',
    id: '',
    original_language: '',
    overview: '',
    popularity: '',
    video: false,
    vote_average: '',
    vote_count: '',
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMovieDetails({
      ...movieDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Movie Details Submitted:', movieDetails);
    // You can further process the form data, like sending it to a server.
   
    const processedMovie = {
      ...movieDetails,
      genre_ids: movieDetails.genre_ids.split(',').map(Number),
    };
   addMovie(processedMovie); // Add new movie to the list
    setMovieDetails({
      original_title: '',
      adult: false,
      backdrop_path: '',
      genre_ids: '',
      original_language: '',
      overview: '',
      popularity: '',
      video: false,
      vote_average: '',
      vote_count: '',
    });
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={headingStyle}>Add New Movie</h2>

      {/* Original Title */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Original Title</label>
        <input
          type="text"
          name="original_title"
          value={movieDetails.original_title}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      {/* Adult */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Adult Content</label>
        <input
          type="checkbox"
          name="adult"
          checked={movieDetails.adult}
          onChange={handleChange}
          style={checkboxStyle}
        />
      </div>

      {/* Backdrop Path */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Backdrop Path (URL)</label>
        <input
          type="text"
          name="backdrop_path"
          value={movieDetails.backdrop_path}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      {/* Genre IDs */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Genre IDs (comma separated)</label>
        <input
          type="text"
          name="genre_ids"
          value={movieDetails.genre_ids}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      {/* Movie ID */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Movie ID</label>
        <input
          type="text"
          name="id"
          value={movieDetails.id}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      {/* Original Language */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Original Language</label>
        <input
          type="text"
          name="original_language"
          value={movieDetails.original_language}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      {/* Overview */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Overview</label>
        <textarea
          name="overview"
          value={movieDetails.overview}
          onChange={handleChange}
          style={textareaStyle}
          required
        />
      </div>

      {/* Popularity */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Popularity</label>
        <input
          type="text"
          name="popularity"
          value={movieDetails.popularity}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      {/* Video */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Video Available</label>
        <input
          type="checkbox"
          name="video"
          checked={movieDetails.video}
          onChange={handleChange}
          style={checkboxStyle}
        />
      </div>

      {/* Vote Average */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Vote Average</label>
        <input
          type="number"
          step="0.1"
          name="vote_average"
          value={movieDetails.vote_average}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      {/* Vote Count */}
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Vote Count</label>
        <input
          type="number"
          name="vote_count"
          value={movieDetails.vote_count}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" style={buttonStyle}>Submit Movie</button>
    </form>
  );
}

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '1.8rem',
  color: '#2c3e50',
  marginBottom: '20px',
};

const inputContainerStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  outline: 'none',
  transition: 'border 0.3s ease',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  outline: 'none',
  resize: 'vertical',
  height: '80px',
};

const checkboxStyle = {
  marginLeft: '10px',
  transform: 'scale(1.2)',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#3498db',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
  backgroundColor: '#2980b9',
};
