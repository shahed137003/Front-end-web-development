import React from 'react'

export default function Students({stuArr}) {
  return (
    <div>
    <h1>Students</h1>
    <br></br>
   {stuArr.map((u)=><div key={u.id}>{u.name}</div>)}
    </div>
    
  )
}
