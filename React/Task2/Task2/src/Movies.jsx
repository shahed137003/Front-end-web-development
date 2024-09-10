// import React, { Component } from 'react'

import React from 'react'

export default function Movies(props) {
  return (
    <div>

    the actual  condition  is ( {props.adult?" an adult":" not an adult"})
    <br></br>
    (the image of the movie )<br></br>
    <img src={"https://image.tmdb.org/t/p/w500/"+props.backdrop_path} alt="Example" /> 
    
    <br></br>
    
    the genre_ids of the results ({props.genre_ids[0]}) 
    
    <br></br>
    the id of the element( {props.id})
    <br></br>
    the original language of the film ({props.original_language})
    <br></br>
    the original title of this film ({props.original_title})
    <br></br>
    the overview of the movie ({props.overview})
    <br></br>
    the popularity of this movie is ({props.popularity})
    <br></br>
    is there a video for this film ({props.video?"Yes":"NO"})
    <br></br>
    the vote average of it ({props.vote_average})
    <br></br>
    the vote count is({props.vote_count})
    <br></br>
        </div>
        )
  
}

