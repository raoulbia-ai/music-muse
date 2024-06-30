// Import React and useState hook
import React, { useState } from 'react';
// Import SearchBox component
import SearchBox from './SearchBox';
// Import stylesheet
import './index.css';

// Defines the main App component
const App = () => {
  // State hook for managing selected details
  const [details, setDetails] = useState(null);

  // Renders the App component
  return (
    <div className="app">
      <h1>Music Muse</h1>
      <p>Welcome! Use the search box below to explore Albums and Songs of your favorite artists. Start typing to see suggestions and select to view detailed information.</p>
      {/* Pass setDetails function as a prop to SearchBox */}
      <SearchBox setDetails={setDetails} />
      {/* Conditionally render the results table if details are available */}
      {details && (
        <table className="results-table">
          <thead>
            <tr>
              <th>Artist Name</th>
              <th>Album Title</th>
              <th>Song Title</th>
            </tr>
          </thead>