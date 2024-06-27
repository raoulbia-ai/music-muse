import React, { useState, useEffect } from 'react';

const Autocomplete = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

const fetchSuggestions = async (query) => {
  try {
    const response = await fetch(`http://localhost:5000/autocomplete?query=${query}`);
    const text = await response.text(); // First, get the response as text
    console.log(text); // Log the text response to see what's actually returned
    const data = JSON.parse(text); // Then attempt to parse it as JSON
    setSuggestions(data);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
  }
};

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
