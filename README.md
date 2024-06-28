# Music Muse

## Introduction

Welcome to the Music Muse project! This full-stack application enhances your search experience by providing real-time search of favourite artist's albums and songs as you type. Leveraging the power of React and Flask, it offers a seamless and efficient way to find your favorite artists.

## Description

The application is structured into two main components:

- **Frontend**: Developed with React, the frontend provides an intuitive interface for users. As you begin typing in the search box, it dynamically displays artist name suggestions, making your search process swift and straightforward.
- **Backend**: Built using Flask, the backend takes care of processing requests from the frontend. It searches through a dataset of artist names and returns relevant suggestions. Additionally, it supports endpoints for retrieving all artist names and specific artist details.

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
    Move to the [`backend`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fraoulbia%2Frepos%2Fwp-music-muse%2Fbackend%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/raoulbia/repos/wp-music-muse/backend") directory and install the required Python packages.
    ```sh
    cd ../backend
    pip install -r requirements.txt
    ```

4. **Start the application**:
    You can start both the frontend and backend with a single command from the `frontend` directory.
    ```sh
    npm start
    ```

    To run the backend separately, use the following command in the [`backend`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fraoulbia%2Frepos%2Fwp-music-muse%2Fbackend%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/raoulbia/repos/wp-music-muse/backend") directory:
    ```sh
    flask run
    ```

Now, your Music Muse application should be up and running. Enjoy exploring your favourite artist's albums and songs with ease!