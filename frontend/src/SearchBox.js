/**
 * SearchBox component
 * This component provides a search box for querying artists.
 */
import './index.css';

/**
 * SearchBox component
 * @returns {JSX.Element} The rendered component.
 */
const SearchBox = () => {
  // State hooks for managing component state
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [details, setDetails] = useState([]);
  const [noArtistsFound, setNoArtistsFound] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false); // New state to control when to show suggestions

  // Effect hook to fetch suggestions based on query
  useEffect(() => {
    if (query.length > 0) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
      setNoArtistsFound(false); // Clear no artists found message when query is empty
    }
  }, [query]);

  /**
   * Fetch suggestions from the API
   * @param {string} query - The search query.
   */
  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/suggestions?query=${query}`);
      const data = await response.json();
      setSuggestions(data);
      setNoArtistsFound(data.length === 0); // Show message if no artists found
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  /**
   * Fetch all artists from the API
   */
  const fetchAllArtists = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/all_artists`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching all artists:', error);
    }
  };

  /**
   * Fetch details for a specific query from the API
   * @param {string} query - The search query.
   */
  const fetchDetails = async (query) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/details?query=${query}`);
      const data = await response.json();
      const formattedData = formatData(data);
      setDetails(formattedData);
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  /**
   * Format the data received from the API
   * @param {object} artistData - The artist data.
   * @returns {array} The formatted data.
   */
  const formatData = (artistData) => {
    if (!artistData.albums) return [];
    return artistData.albums.map(album => ({
      artist: artistData.name,
      album: album.title,
      albumDescription: album.description,
      songTitles: `<ul>${album.songs.map(song => `<li>${song.title} (${song.length})</li>`).join('')}</ul>`,
    }));
  };

  /**
   * Handle changes to the search input
   * @param {object} e - The event object.
   */
  const handleChange = (e) => {
    setQuery(e.target.value);
    setDetails([]); // Clear details when query changes
    setNoArtistsFound(false); // Hide no artists found message when query changes
    setShowSuggestions(true); // Show suggestions when user types
  };

  /**
   * Handle focus event on the search input
   */
  const handleFocus = () => {
    fetchAllArtists();
    setShowSuggestions(true); // Show suggestions when input is focused
  };

  /**
   * Handle blur event on the search input to hide suggestions
   */
  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100); // Delay to allow click event to register
  };

  /**
   * Handle key down events for navigation and selection
   * @param {object} e - The event object.
   */
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

  /**
   * Handle click events on suggestions
   * @param {string} suggestion - The selected suggestion.
   */
  const handleSuggestionClick = (suggestion) => {
    setQuery('');
    setSuggestions([]);
    setSelectedSuggestion(-1);
    fetchDetails(suggestion);
  };

  /**
   * Render the search box component
   * @returns {JSX.Element} The rendered component.
   */
  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur} // Hide suggestions when input loses focus
        className="search-input"
        placeholder="Type to Search by artist...(or Click to see all artists)"
      />
      {noArtistsFound && <div className="no-artists-found">No artists found</div>}
      {showSuggestions && suggestions.length > 0 && (
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

/**
 * ResultsTable component
 * @param {array} details - The details to display.
 * @returns {JSX.Element} The rendered component.
 */
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
