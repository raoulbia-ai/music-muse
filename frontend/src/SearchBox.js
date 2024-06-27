import React, { useState, useEffect } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (query.length > 0) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const fetchSuggestions = async (query) => {
    const response = await fetch(`http://localhost:5000/api/suggestions?query=${query}`);
    const data = await response.json();
    setSuggestions(data);
  };

  const fetchDetails = async (query) => {
    const response = await fetch(`http://localhost:5000/api/details?query=${query}`);
    const data = await response.json();
    setDetails(data);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setDetails(null); // Clear details when query changes
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setSelectedSuggestion((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && selectedSuggestion >= 0) {
      const selected = suggestions[selectedSuggestion];
      setQuery(selected);
      setSuggestions([]);
      fetchDetails(selected);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    fetchDetails(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ background: selectedSuggestion === index ? '#ddd' : '#fff' }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {details && (
        <div>
          <h2>Details</h2>
          <pre>{JSON.stringify(details, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
