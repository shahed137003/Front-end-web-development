// import React from 'react'
import Movie from './Movie'
import React, { useState } from 'react'
export default function Movies() {
    const [moviesArr]= useState([
        {name:"Kuch Kuch hota hai",releaseDate:4},
        {name:"Dilwali",releaseDate:3},
        {name:"Jab tak hai ja",releaseDate:3}
        ])
    return (
       
       <div>
        {moviesArr.map((u)=>{ return <Movie key={u.name} name={u.name} releaseDate={u.releaseDate}></Movie>})}
       </div>
        

    )
}



