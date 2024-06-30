Here's the updated README file with a new section on Deployment to Azure, and all URLs converted to clickable Markdown links:

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
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

Before setting up the project, ensure you have the following installed on your system:
- Node.js and npm (Node Package Manager)
- Python 3 and pip (Python Package Installer)

### Steps

1. **Clone the repository**:
    
    ```sh
    git clone https://github.com/raoulbia-ai/music-muse.git
    ```

2. **Set up the frontend**:
    Navigate to the `frontend` directory and install the dependencies.
    ```sh
    cd frontend
    npm install
    ```

3. **Set up the backend**:
    Move to the `backend` directory and install the required Python packages.
    ```sh
    cd ../backend
    pip install -r requirements.txt
    ```

4. **Start the application**:
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

To deploy the Music Muse application to Azure, follow these steps:

1. **Create Azure Resources**:
   - Create a new [Azure Static Web App](https://docs.microsoft.com/en-us/azure/static-web-apps/overview) resource for the React frontend.
   - Create a new [Azure Web App](https://docs.microsoft.com/en-us/azure/app-service/overview) resource for the Flask backend.

2. **Configure Frontend Deployment**:
   - In the Azure portal, connect your Static Web App to your GitHub repository.
   - Set the build configuration to use the `frontend` directory and the `build` output directory.

3. **Configure Backend Deployment**:
   - In the Azure portal, go to the Web App's Configuration settings.
   - Set the Startup Command to `python app.py`.
   - Enable CORS and allow requests from your frontend's Azure URL.

4. **Set Environment Variables**:
   - In the Azure portal, configure the necessary environment variables for your backend, such as database connection strings or API keys.

5. **Deploy the Application**:
   - Push your code changes to the connected GitHub repository.
   - Azure will automatically build and deploy your frontend and backend based on the configured settings.

For detailed instructions and more deployment options, refer to the [Azure Static Web Apps documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/) and [Azure App Service documentation](https://docs.microsoft.com/en-us/azure/app-service/).

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
