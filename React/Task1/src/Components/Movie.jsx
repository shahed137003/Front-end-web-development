import React from 'react'

export default function Movie(props) {
//  console.log(props)
    return (
        <div style={{backgroundColor:"red",padding:"10px",margin:"5px"}}>
        <div>name :{props.name}  </div>
        <div>releaseDate: {props.releaseDate}</div>
      </div>
    )
  
}


