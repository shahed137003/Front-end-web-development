import React, { useState }from 'react'

export default function Form({ handleInputChange, handleSubmit }) {

return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
        <label >Enter Name :</label>
        <input type="text" name="name" placeholder='EnterName...'  onChange={handleInputChange}></input>
        </div>
        <div>
        <label >Enter Age :</label>
        <input type="text" name="age" placeholder='EnterAge...'  onChange={handleInputChange}></input>
        </div>
        <button type="submit">Submit</button>
        </form>
       
    </div>
)
}
