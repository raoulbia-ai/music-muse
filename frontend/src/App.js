// Import React and useState hook from 'react'
import React, { useState } from 'react';
// Import the SearchBox component
import SearchBox from './SearchBox';
// Import stylesheet for the App component
import './index.css';

// Defines the main App component
const App = () => {
  // State hook for storing details of the selected item
  const [details, setDetails] = useState(null);

  // Render the App component
  return (
    <div className="app">
      {/* Application title */}
      <h1>Music Muse</h1>
      {/* Application introduction text */}
      <p>Welcome! Use the search box below to explore Albums and Songs of your favorite artists. Start typing to see suggestions and select to view detailed information.</p>
      {/* SearchBox component, passing setDetails as a prop to update the state */}
      <SearchBox setDetails={setDetails} />
      {/* Conditionally render the details table if details are available */}
      {details && (
        <table className="results-table">
          <thead>
            <tr>
              <th>Artist Name</th>
              <th>Album Title</th>
              <th>Song Title</th>
            </tr>
          </thead>
          <tbody>
            {/* Display the details of the selected item */}
            <tr>
              <td>{details.artist}</td>
              <td>{details.album}</td>
              <td>{details.song}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

// Export the App component for use in other parts of the application
export default App;