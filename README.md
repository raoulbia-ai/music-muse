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

1. **Backend Deployment**:
   - The Flask backend is deployed to Azure Web App.
   - The deployment is triggered on pushes to the `master` branch that affect the `backend/` directory.
   - The workflow is defined in `.github/workflows/backend_build_deploy.yml`.

2. **Frontend Deployment**:
   - The React frontend is deployed to Azure Blob Storage.
   - The deployment is triggered on pushes to the `master` branch that affect the `frontend/` directory.
   - The workflow is defined in `.github/workflows/frontend_build_deploy.yml`.

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
