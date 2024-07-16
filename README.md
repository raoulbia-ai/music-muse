# Music Muse

## Introduction

Welcome to the Music Muse project! This full-stack application enhances your search experience by providing real-time search of your favorite artist's albums and songs as you type. Leveraging the power of React and Flask, it offers a seamless and efficient way to find your favorite music.

## Description

The application is structured into two main components:

- **Frontend**: Developed with React, the frontend provides an intuitive interface for users. As you begin typing in the search box, it dynamically displays artist name suggestions, making your search process swift and straightforward.
- **Backend**: Built using Flask, the backend takes care of processing requests from the frontend. It searches through a dataset of artist names and returns relevant suggestions. Additionally, it supports endpoints for retrieving all artist names and specific artist details.

## Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites) 
  - [Steps](#steps)
- [Usage](#usage)
- [Deployment to Azure](#deployment-to-azure)
- [Environment Variables](#environment-variables)
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

## Contributing

Contributions are welcome! If you'd like to contribute to the Music Muse project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please ensure your code follows the project's coding conventions and includes appropriate tests.

## License

This project is licensed under the [MIT License](https://opensource.org/license/MIT).
## Technical Assessment Presentation

### Overview
This repository was created for a technical assessment test for a Fullstack Engineer role. The main files of interest are in the `backend` and `frontend/src` directories.

### Backend
- **app.py**: This file contains the Flask application with endpoints for fetching artist suggestions, all artists, and details of a specific artist.

#### Endpoints
1. **Root Endpoint (`/`)**: Returns a welcome message.
2. **Health Check Endpoint (`/health`)**: Indicates the application is up and running.
3. **Suggestions Endpoint (`/api/suggestions`)**: Returns artist suggestions based on a query.
4. **All Artists Endpoint (`/api/all_artists`)**: Returns a sorted list of all artists.
5. **Details Endpoint (`/api/details`)**: Returns details of an artist based on a query.

### Frontend
- **App.js**: This file contains the main React component that renders the application interface.
- **SearchBox.js**: This file contains the SearchBox component that provides a search box for querying artists and displaying results.

#### Components
1. **App Component**: Manages the overall layout and state of the application.
2. **SearchBox Component**: Handles user input, fetches suggestions, and displays artist details.
3. **ResultsTable Component**: Displays the details of the selected artist in a tabular format.

### Key Features
1. **Autocomplete Search Functionality**: As users type in the search box, the application provides real-time autocomplete suggestions for artist names. This feature enhances the user experience by making it faster and easier to find the desired artist.
2. **Artist Details**: Users can view detailed information about an artist, including albums and songs, by selecting an artist from the autocomplete suggestions.
3. **Responsive Design**: The application is designed to be responsive and user-friendly, ensuring a seamless experience across different devices and screen sizes.

### How to Run
1. **Backend**: Navigate to the `backend` directory and run `flask run`.
2. **Frontend**: Navigate to the `frontend` directory and run `npm start`.

### Testing
1. **Backend Testing**: Use tools like Postman to test the API endpoints.
2. **Frontend Testing**: Use React Testing Library and Jest to test the components.

### Future Improvements
1. **Enhanced Error Handling**: Improve error handling in both backend and frontend.
2. **Pagination**: Implement pagination for artist suggestions and details.
3. **Caching**: Add caching mechanisms to improve performance.
4. **User Authentication**: Implement user authentication and authorization.

### Discussion Points

1. **Architecture**:
   - **Frontend**: Built with React, the frontend provides a dynamic and responsive user interface. It communicates with the backend via RESTful API calls.
   - **Backend**: Developed using Flask, the backend handles API requests, processes data, and serves responses. It reads data from a JSON file and provides endpoints for artist suggestions, all artists, and artist details.
   - **Communication**: The frontend and backend communicate over HTTP, with the frontend making asynchronous requests to the backend endpoints.
   - **Detailed Diagram**: Include a detailed architecture diagram showing the interaction between the frontend, backend, and any external services.
   - **Technology Stack**: Provide a detailed explanation of the technology stack used, including the reasons for choosing React and Flask.

2. **Endpoints**:
   - **Root Endpoint (`/`)**: Returns a welcome message to indicate the API is accessible.
   - **Health Check Endpoint (`/health`)**: Provides a simple status check to ensure the backend is running.
   - **Suggestions Endpoint (`/api/suggestions`)**: Accepts a query parameter and returns a list of artist names that match the query.
   - **All Artists Endpoint (`/api/all_artists`)**: Returns a sorted list of all artist names available in the dataset.
   - **Details Endpoint (`/api/details`)**: Accepts a query parameter and returns detailed information about the specified artist, including albums and songs.
   - **Endpoint Documentation**: Create detailed documentation for each endpoint, including request and response examples.
   - **Error Responses**: Document the possible error responses for each endpoint and how they are handled.

3. **Components**:
   - **App Component**: The main component that manages the overall layout and state of the application. It includes the search box and results table.
   - **SearchBox Component**: Handles user input for searching artists. It fetches suggestions and artist details from the backend and updates the state accordingly.
   - **ResultsTable Component**: Displays the details of the selected artist, including albums and songs, in a tabular format.
   - **Component Hierarchy**: Include a component hierarchy diagram to show the structure and relationships between components.
   - **Component Responsibilities**: Provide a detailed explanation of the responsibilities of each component.

4. **State Management**:
   - **React Hooks**: The application uses React hooks (`useState`, `useEffect`) to manage state and side effects.
   - **State Variables**: Key state variables include `query` (search input), `suggestions` (list of artist suggestions), `details` (selected artist details), and `selectedSuggestion` (index of the currently highlighted suggestion).
   - **State Updates**: State is updated based on user interactions (e.g., typing in the search box, selecting a suggestion) and API responses.
   - **State Flow**: Include a diagram showing the flow of state within the application.
   - **State Variables**: Provide a detailed explanation of each state variable and its purpose.

5. **Error Handling**:
   - **Backend**: Errors in the backend are logged, and appropriate HTTP status codes are returned to the frontend.
   - **Frontend**: The frontend handles errors by displaying user-friendly messages and ensuring the application remains responsive.

6. **Testing**:
   - **Backend Testing**: API endpoints can be tested using tools like Postman to ensure they return the expected responses.
   - **Frontend Testing**: Components can be tested using React Testing Library and Jest to verify their behavior and interactions.

7. **Future Improvements**:
   - **Enhanced Error Handling**: Improve error handling mechanisms in both the backend and frontend to provide more detailed error messages and recovery options.
   - **Pagination**: Implement pagination for artist suggestions and details to handle large datasets more efficiently.
   - **Caching**: Add caching mechanisms to reduce the load on the backend and improve response times.
   - **User Authentication**: Implement user authentication and authorization to provide personalized experiences and secure access to certain features.
   - **Performance Optimization**: Optimize the performance of both the frontend and backend to ensure a smooth user experience, especially under high load conditions.
   - **Additional Features**: Add more features such as user playlists, favorite artists, and integration with external music APIs for richer data.
   - **Detailed Roadmap**: Create a detailed roadmap for future improvements, including timelines and priorities.
   - **Technical Debt**: Identify any technical debt and propose solutions for addressing it.

### Conclusion
This application demonstrates the ability to create a fullstack application with a Flask backend and a React frontend. It showcases skills in API development, state management, responsive design, and testing.
## RESTful API Overview

This project includes a RESTful API implemented in `backend/app.py`. This section provides an educational overview of what makes an API RESTful and how the endpoints in this project adhere to these principles.

### Characteristics of a RESTful API

1. **Stateless**: Each request from a client to the server must contain all the information the server needs to fulfill that request. The server does not store any client context between requests. In `backend/app.py`, each endpoint processes requests independently without relying on any stored context.

2. **Client-Server Architecture**: The client and server are separate entities. The client makes requests to the server, and the server processes these requests and returns the appropriate responses. In this case, the frontend (client) makes HTTP requests to the backend (server) endpoints.

3. **Uniform Interface**: The API follows a consistent and uniform interface. Each endpoint in `backend/app.py` has a clear purpose and returns data in a consistent format (JSON).

4. **Resource-Based**: The API is designed around resources, which are identified by URLs. In `backend/app.py`, resources like artist suggestions, all artists, and artist details are accessed via specific endpoints (`/api/suggestions`, `/api/all_artists`, `/api/details`).

5. **HTTP Methods**: RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. In `backend/app.py`, the endpoints use the GET method to retrieve data.

### Endpoints in `backend/app.py`

- **Endpoint `/api/suggestions`**:
  - **Resource**: Artist suggestions based on a query.
  - **HTTP Method**: GET.
  - **URL**: `/api/suggestions`.
  - **Response**: JSON array of artist names.

- **Endpoint `/api/all_artists`**:
  - **Resource**: All artist names.
  - **HTTP Method**: GET.
  - **URL**: `/api/all_artists`.
  - **Response**: JSON array of all artist names.

- **Endpoint `/api/details`**:
  - **Resource**: Detailed information about an artist.
  - **HTTP Method**: GET.
  - **URL**: `/api/details`.
  - **Response**: JSON object with artist details.

### Interaction Flow

1. **User Interaction**:
   - User types in the search box.
   - `fetchSuggestions` is called, and suggestions are displayed.
   - User can navigate suggestions using the keyboard or click on a suggestion.

2. **Fetching All Artists**:
   - User focuses on the search input.
   - `fetchAllArtists` is called, and all artist names are displayed.

3. **Fetching Details**:
   - User selects a suggestion.
   - `fetchDetails` is called, and detailed information about the artist is displayed.

This interaction ensures that the frontend dynamically updates based on user input and provides relevant information by communicating with the backend endpoints.
