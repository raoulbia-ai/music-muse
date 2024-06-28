import React, { useState, useEffect } from 'react';
import './index.css';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`http://localhost:5000/api/suggestions?query=${query}`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const fetchAllArtists = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/all_artists`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching all artists:', error);
    }
  };

  const fetchDetails = async (query) => {
    try {
      const response = await fetch(`http://localhost:5000/api/details?query=${query}`);
      const data = await response.json();
      const formattedData = formatData(data);
      setDetails(formattedData);
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  const formatData = (artistData) => {
    if (!artistData.albums) return [];
    const results = [];
    artistData.albums.forEach(album => {
      const songList = album.songs.map(song => `<li>${song.title} (${song.length})</li>`).join('');
      results.push({
        artist: artistData.name,
        album: album.title,
        albumDescription: album.description,
        songTitles: `<ul>${songList}</ul>`,
      });
    });
    return results;
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setDetails([]); // Clear details when query changes
  };

  const handleFocus = () => {
    if (!query) {
      fetchAllArtists();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setSelectedSuggestion((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && selectedSuggestion >= 0) {
      const selected = suggestions[selectedSuggestion];
      setQuery('');
      setSuggestions([]);
      setSelectedSuggestion(-1);
      fetchDetails(selected);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery('');
    setSuggestions([]);
    setSelectedSuggestion(-1);
    fetchDetails(suggestion);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        className="search-input"
        placeholder="Type to Search by artist...(or Click to see all artists)"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
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
      {details.length > 0 && (
        <div className="details">
          <ResultsTable details={details} />
        </div>
      )}
    </div>
  );
};

const ResultsTable = ({ details }) => {
  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>Artist Name</th>
          <th>Album Title</th>
          <th>Album Description</th>
          <th>Song Titles</th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail, index) => (
          <tr key={index}>
            <td>{detail.artist || 'N/A'}</td>
            <td>{detail.album || 'N/A'}</td>
            <td>{detail.albumDescription || 'N/A'}</td>
            <td dangerouslySetInnerHTML={{ __html: detail.songTitles || 'N/A' }} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchBox;
