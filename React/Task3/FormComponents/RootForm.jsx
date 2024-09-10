import React, { useState } from 'react'
import Form from './Form'
//import Card from './Card'
// import "../style/Form.css"
import RecipeReviewCard from './Card';
export default function RootForm() {
  const [inputs, setInputs] = useState({ name: '', age: '' });
  const [result, setResult] = useState({ name: '', age: '' });
  // const [result, setResult] = useState("")
      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    // console.log(name)
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Concatenate the inputs or perform any desired operation
     // const output = `name: ${inputs.name}, age: ${inputs.age}`;
   var  nameVal=inputs.name
   var  ageVal=inputs.age
  //  console.log(inputs.age)
      setResult({...result,name:nameVal,age:ageVal});
      // console.log(result)
  };

  return (
    <div>
<h1>Form </h1>
    <Form handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    <br></br>
    {/* <Card result={result} /> */}
    <h1>Display Card </h1>

    < RecipeReviewCard result={result}></RecipeReviewCard>
    </div>
    
   
  )
}

