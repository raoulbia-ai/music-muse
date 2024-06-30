from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all domains on all routes
CORS(app, resources={r"/*": {"origins": ["https://jolly-sky-0071d7d03.5.azurestaticapps.net",
                                         "http://localhost:3000"]}})

# Load data from JSON file
with open('data.json', 'r') as f:
    data = json.load(f)

@app.route('/', methods=['GET'])
def root():
    """Root endpoint returning a welcome message."""
    return jsonify({"message": "Welcome to the application!"}), 200

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint to indicate the application is up and running."""
    return jsonify({"Application status": "up and running"}), 200

@app.route('/api/suggestions', methods=['GET'])
def get_suggestions():
    """Endpoint to get artist suggestions based on a query."""
    query = request.args.get('query', '')
    suggestions = [artist['name'] for artist in data if query.lower() in artist['name'].lower()]
    return jsonify(suggestions)

@app.route('/api/all_artists', methods=['GET'])
def get_all_artists():
    """Endpoint to get a sorted list of all artists."""
    artists = sorted(artist['name'] for artist in data)
    return jsonify(artists)

@app.route('/api/details', methods=['GET'])
def get_details():
    """Endpoint to get details of an artist based on a query."""
    query = request.args.get('query', '')
    details = next((artist for artist in data if query.lower() == artist['name'].lower()), {})
    return jsonify(details)

if __name__ == "__main__":
    # Run the Flask app on port from environment or default to 5000
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)