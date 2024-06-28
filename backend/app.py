from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

with open('data.json', 'r') as f:
    data = json.load(f)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "up"}), 200

@app.route('/api/suggestions', methods=['GET'])
def get_suggestions():
    query = request.args.get('query', '')
    suggestions = []

    for artist in data:
        if query.lower() in artist['name'].lower():
            suggestions.append(artist['name'])
    
    return jsonify(suggestions)

@app.route('/api/all_artists', methods=['GET'])
def get_all_artists():
    artists = [artist['name'] for artist in data]
    artists.sort()
    return jsonify(artists)

@app.route('/api/details', methods=['GET'])
def get_details():
    query = request.args.get('query', '')
    details = {}

    for artist in data:
        if query.lower() == artist['name'].lower():
            details = artist
            break
    
    return jsonify(details)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
