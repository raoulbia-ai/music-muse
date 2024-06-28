import React, { useState } from 'react';
import SearchBox from './SearchBox';
import './index.css';

const App = () => {
  const [details, setDetails] = useState(null);

  return (
    <div className="app">
      <h1>Music Muse</h1>
      <p>Welcome! Use the search box below to explore Albums and Songs of your favorite artists. Start typing to see suggestions and select to view detailed information.</p>
      <SearchBox setDetails={setDetails} />
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

export default App;
