import React, { useState } from 'react'

export default function Search({searchWord}) {
    const [word,useWord]=useState("")
    const handleChange =(e)=>{
        useWord(e.target.value)
        searchWord(e.target.value)
    }
  return (
    <input type="text" placeholder='Search....' value={word} onChange={handleChange}></input>
  )
}
