# Music Muse

## Introduction

Welcome to the Music Muse project! This full-stack application enhances your search experience by providing real-time search of your favorite artist's albums and songs as you type. Leveraging the power of React and Flask, it offers a seamless and efficient way to find your favorite music.

### Key Features

1. **Autocomplete Search Functionality**: As users type in the search box, the application provides real-time autocomplete suggestions for artist names. This feature enhances the user experience by making it faster and easier to find the desired artist.
2. **Artist Details**: Users can view detailed information about an artist, including albums and songs, by selecting an artist from the autocomplete suggestions.

## Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites) 
  - [Steps](#steps)
- [Usage](#usage)
- [Deployment to Azure](#deployment-to-azure)
- [Environment Variables](#environment-variables)
- [Technical Overview](#technical-overview)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

Before setting up the project, ensure you have the following installed on your system:
- Node.js and npm (Node Package Manager)
- Python 3 and pip (Python Package Installer)
- Conda (Anaconda or Miniconda)

### Steps

1. **Clone the repository**:
    
    ```sh
    git clone https://github.com/raoulbia-ai/music-muse.git
    ```

2. **Create and activate a Conda environment**:
    ```sh
    conda create --name music-muse python=3.8
    conda activate music-muse
    ```

3. **Set up the frontend**:
    Navigate to the `frontend` directory and install the dependencies.
    ```sh
    cd frontend
    npm install
    ```

4. **Set up the backend**:
    Move to the `backend` directory and install the required Python packages.
    ```sh
    cd ../backend
    pip install -r requirements.txt
    ```

5. **Start the application**:
    You can start both the frontend and backend with a single command from the `frontend` directory.
    ```sh
    npm start
    ```

    To run the backend separately, use the following command in the `backend` directory:
    ```sh
    flask run
    ```

Now, your Music Muse application should be up and running. Enjoy exploring your favorite artist's albums and songs with ease!

## Usage

Once the application is running:

1. Open your web browser and navigate to `http://localhost:3000` to access the Music Muse frontend.

2. Start typing the name of an artist in the search box.

3. As you type, the application will provide real-time suggestions of matching artist names.

4. Select an artist from the suggestions to view their details, including albums and songs.

## Deployment to Azure

The Music Muse application is deployed to Azure using GitHub Actions. The deployment process is automated for both the frontend and backend components:

1. **Create Azure Resources**:
   - Create a new [Azure Static Web App](https://docs.microsoft.com/en-us/azure/static-web-apps/overview) resource for the React frontend.
   - Create a new [Azure Web App](https://docs.microsoft.com/en-us/azure/app-service/overview) resource for the Flask backend.

2. **Configure Frontend Deployment**:
   - In the Azure portal, connect your Static Web App to your GitHub repository.
   - Set the build configuration to use the `frontend` directory and the `build` output directory.

3. **Configure Backend Deployment**:
   - In the Azure portal, go to the Web App's Configuration settings.
   - Set the Startup Command to `gunicorn --bind=0.0.0.0 --timeout 600 app:app`.


4. **Deploy the Application**:
   - Push your code changes to the connected GitHub repository.
   - Azure will automatically build and deploy your frontend and backend based on the configured settings.

For more details on the deployment process, refer to the workflow files in the `.github/workflows/` directory.

## Environment Variables

The application uses environment variables to manage configuration. We use `.env.development` for local development and `.env.production` for production deployment. These files are not committed to the repository for security reasons.

To set up your environment:

1. Copy the `.env.example` file in the root directory.
2. Rename it to `.env.development` for local development or `.env.production` for production use.
3. Fill in the appropriate values for each environment variable.

The key environment variable used is:

- `REACT_APP_API_BASE_URL`: Set to `http://localhost:5000` for local development and `https://<your-application-name>.azurewebsites.net` for production.


## Technical Overview

### Backend

This project includes a RESTful API implemented in `backend/app.py`. This section provides an educational overview of what makes an API RESTful and how the endpoints in this project adhere to these principles.

- **app.py**: This script contains the Flask application with endpoints for fetching artist suggestions, all artists, and details of a specific artist.

#### Backend Endpoints

1. **`/`**: Returns a welcome message.
2. **`/health`**: Indicates the application is up and running.
3. **`/api/suggestions`**: Returns artist suggestions based on a query.
    - User types in the search box.
   - `fetchSuggestions` is called, and suggestions are displayed.
   - User can navigate suggestions using the keyboard or click on a suggestion.
5. **`/api/all_artists`**: Returns a sorted list of all artists.
   - User focuses on the search input.
   - `fetchAllArtists` is called, and all artist names are displayed.    
6. **`/api/details`**: Returns details of an artist based on a query.
   - User selects a suggestion.
   - `fetchDetails` is called, and detailed information about the artist is displayed.

### Frontend

#### Frontend Components
1. **App Component**: Manages the overall layout and state of the application.
   - App.js: This script contains the main React component that renders the application interface.
3. **SearchBox Component**: Handles user input, fetches suggestions, and displays artist details.
   - SearchBox.js: This script contains the SearchBox component that provides a search box for querying artists and displaying results.
4. **ResultsTable Component**: Displays the details of the selected artist in a tabular format.

#### Frontend Workflow

  1. Fetching Suggestions:                                                                                                            
     • When the user types in the search box, the `fetchSuggestions` function is called.                                               
     • This function sends a GET request to the /api/suggestions endpoint with the current query.                                    
     • The suggestions are then displayed in a dropdown list.                                                                        
   2. Fetching All Artists:                                                                                                            
     • When the search input is focused (*), the `fetchAllArtists` function is called.                                                     
     • This function sends a GET request to the /api/all_artists endpoint.                                                           
     • All artist names are displayed in the dropdown list.                                                                          
   3. Fetching Details:                                                                                                                
     • When a suggestion is clicked or selected using the keyboard, the `fetchDetails` function is called.                             
     • This function sends a GET request to the /api/details endpoint with the selected artist name.                                 
     • The detailed information about the artist is then displayed.  


(*) the event that occurs when the user clicks on or tabs into the search input field,    
making it active and ready to receive input. In the context of the SearchBox component, this is handled by the handleFocus function,
which is triggered by the onFocus event of the input element.  

#### SearchBox.js

Here is the relevant part of the SearchBox component:                                                                               
```                                                                                                                              
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
```                                                                                                                              
                                                                                                                                    
The onFocus event is attached to the handleFocus function, which is defined as follows:                                             

```                                                                                                                                
 /**                                                                                                                                
  * Handle focus event on the search input                                                                                          
  */                                                                                                                                
 const handleFocus = () => {                                                                                                        
   fetchAllArtists();                                                                                                               
   setShowSuggestions(true); // Show suggestions when input is focused                                                              
 };                                                                                                                                 
```                                                                                                                                    

When the search input field is focused, the handleFocus function is called, which in turn calls the fetchAllArtists function to     
fetch and display all artist names.

#### Asynchronous Requests

The frontend makes asynchronous requests to the backend endpoints. This can be seen in the `frontend/src/SearchBox.js` file, where the `fetch` API is used to make asynchronous HTTP requests to the backend.

For example, the `fetchSuggestions` function makes an asynchronous GET request to the `/api/suggestions` endpoint:

```javascript
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
```

Similarly, the `fetchDetails` function makes an asynchronous GET request to the `/api/details` endpoint:

```javascript
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
```

These functions use the `async` and `await` keywords to handle asynchronous operations, ensuring that the frontend can continue to operate smoothly while waiting for the backend to respond.


#### State Management

   - **React Hooks**: The application uses React hooks (`useState`, `useEffect`) to manage state and side effects.
   - **State Variables**: Key state variables include `query` (search input), `suggestions` (list of artist suggestions), `details` (selected artist details), and `selectedSuggestion` (index of the currently highlighted suggestion).
   - **State Updates**: State is updated based on user interactions (e.g., typing in the search box, selecting a suggestion) and API responses.

## Contributing

Contributions are welcome! If you'd like to contribute to the Music Muse project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please ensure your code follows the project's coding conventions and includes appropriate tests.

License
-------

This project is licensed under the MIT License. See the LICENSE file in the repository for more details.
