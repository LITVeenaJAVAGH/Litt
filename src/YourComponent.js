
import React, { useState } from 'react';
import { createUser } from './api';
const YourComponent = () => {
  
  const [inputValue, setInputValue] = useState('');
   const handleInputChange = (event) => {
     setInputValue(event.target.value);
   };
  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(inputValue);
     setInputValue('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        { <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text..."
        /> }
        
        <button type="submit" >Submit</button>
      </form>
      <p>Stored Value: {inputValue}</p>
    </div>
  );
};
export default YourComponent;
