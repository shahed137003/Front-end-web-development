import React, { useState } from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
const textStyle = {
  lineHeight: '1.6',
  marginBottom: '10px',
};
const labelStyle = {
  fontWeight: 'bold',
};
export default function MovieDetails() {
const {id}= useParams()

const [MovieArr,setMovie]=useState(null)
useEffect(()=>{
  axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7").then(res=> setMovie(res.data.results.find((u)=>u.id.toString()===id)))

},[])
if (!MovieArr) return <div>Loading...</div>
  return (
    <div>

<p style={textStyle}>
        <span style={labelStyle}>Genre ID:</span> {MovieArr.genre_ids[0]}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>ID:</span> {MovieArr.id}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Original Language:</span> {MovieArr.original_language}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Overview:</span> {MovieArr.overview}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Popularity:</span> {MovieArr.popularity}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Video Available:</span> {MovieArr.video ? 'Yes' : 'No'}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Vote Average:</span> {MovieArr.vote_average}
      </p>
      
      <p style={textStyle}>
        <span style={labelStyle}>Vote Count:</span> {MovieArr.vote_count}
      </p> 


    </div>
     
  )
}

