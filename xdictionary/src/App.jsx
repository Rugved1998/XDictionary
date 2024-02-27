import React, { useState } from 'react';

export default function App(){
  // Initialize the dictionary state
  const [dictionary, setDictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State for search term and definition display
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  // Function to handle search button click
  const handleSearch = () => {
    // Case-insensitive search in the dictionary
    const foundWord = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    // Update definition state based on search result
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <label>
       
        <input
          placeholder='Search for a word...'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
      <div>
        <strong>Definition:</strong> 
        <br />
        <br />
        {definition}
      </div>
    </div>
  );
};


