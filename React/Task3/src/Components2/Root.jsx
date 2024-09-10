import React, { useState } from 'react'
import Search from './Search'
import Students from './Students'
export default function Root() {
    // this is used for creating array of data
    const [stuArr,stuFun]=useState([
        {id:1,name:"shahd"},
        {id:2,name:"Ahmed"},
        {id:3,name:"youssef"},
        {id:4,name:"mariam"}
    ])
    const [filteredArr,setFilterArr]=useState(stuArr)
    const searchWord=(word)=>{
        stuFun(stuArr.filter((std)=>std.name.includes(word)))
        setFilterArr(stuArr.filter((std)=>std.name.toLowerCase().includes(word.toLowerCase( ))))
    }
  return (
    <div>
    <Search searchWord={searchWord}></Search>
    <Students stuArr={filteredArr}></Students>
  </div>
  )
}

