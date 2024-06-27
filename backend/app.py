from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

with open('data.json', 'r') as f:
    data = json.load(f)

@app.route('/api/suggestions', methods=['GET'])
def get_suggestions():
    query = request.args.get('query', '')
    suggestions = []

    for artist in data:
        for album in artist['albums']:
            for song in album['songs']:
                if query.lower() in song['title'].lower():
                    suggestions.append(song['title'])
                if query.lower() in album['title'].lower():
                    suggestions.append(album['title'])
        if query.lower() in artist['name'].lower():
            suggestions.append(artist['name'])
    
    return jsonify(suggestions)

@app.route('/api/details', methods=['GET'])
def get_details():
    query = request.args.get('query', '')
    details = {}

    for artist in data:
        if query.lower() == artist['name'].lower():
            details = artist
            break
        for album in artist['albums']:
            if query.lower() == album['title'].lower():
                details = album
                break
            for song in album['songs']:
                if query.lower() == song['title'].lower():
                    details = song
                    break
    
    return jsonify(details)

if __name__ == '__main__':
    app.run(debug=True)
