# Python Flask API to serve the model
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import tensorflow as tf
import scipy
import pandas as pd
import numpy as np


app = Flask(__name__)
CORS(app)

# [[8.31, 214.3733, 22018.41744, 8.059, 356.88, 0, 18.43, 100.3417, 4.6287]]

@app.route('/', methods=['GET'])
def home():
    return "Hello"

@app.route('/water_contamination_predict/<data>', methods=['GET'])
def water_predict(data):
    pickled_model = pickle.load(open(r'G:\\nasa-wildfire-detection-app-main\\nasa-wildfire-detection-app-main\\assets\\models\\water_contamination_mode.pkl', 'rb'))
    try:
        data = eval(data)
        # Get data from the request
        # Perform inference
        prediction = pickled_model.predict(data)
        # Return the prediction as JSON
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})
    

@app.route('/wildfire_prediction_model/<data>', methods=['GET'])
def wildfire_predict(data):

    with open(r'G:\\nasa-wildfire-detection-app-main\\nasa-wildfire-detection-app-main\\assets\\models\\wildfire_detection_from_satellite_model.pkl', 'rb') as model_file:
        pickled_model = pickle.load(model_file)
        
    try:
        data = eval(data)
        # Get data from the request
        # Perform inference
        prediction = pickled_model.predict(data)
        # Return the prediction as JSON
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
