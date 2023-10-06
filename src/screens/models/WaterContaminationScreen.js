import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function WaterContaminationScreen() {
  const [prediction, setPrediction] = useState(null);
  const [parameters, setParameters] = useState({
    ph: "",
    Hardness: "",
    Solids: "",
    Chloramines: "",
    Sulfate: "",
    Conductivity: "",
    Organic_Carbon: "",
    Trihalomethanes: "",
    Turbidity: ""
  });

  const fetchData = async () => {
    // Check if all input fields contain valid float numbers
    const areValidNumbers = Object.values(parameters).every(value => !isNaN(parseFloat(value)));

    if (!areValidNumbers) {
      Alert.alert('Invalid Input', 'Please enter valid numbers for all parameters.');
      return;
    }

    try {
      const inputData = [
        Object.values(parameters).map(value => parseFloat(value))
      ];

      console.log(inputData)
      const response = await fetch(`https://8541-103-74-86-66.ngrok-free.app//water_contamination_predict/${JSON.stringify(inputData)}`);
        
      const data = await response.json();

      // Assuming the prediction is an array with a single element
      const predictionValue = data.prediction[0];
      setPrediction(predictionValue);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Water Contamination Prediction</Text>
      
      {Object.keys(parameters).map((key) => (
        <TextInput
          key={key}
          style={styles.input}
          placeholder={key}
          value={parameters[key]}
          onChangeText={(text) => setParameters((prev) => ({ ...prev, [key]: text }))}
          keyboardType="numeric"
        />
      ))}

      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text style={styles.buttonText}>Check Contamination</Text>
      </TouchableOpacity>
      
      {prediction !== null && (
        <Text style={styles.resultText}>
          The water is {prediction === 0 ? 'safe to drink' : 'contaminated'}.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 5
  },
  button: {
    marginTop: 15,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  resultText: {
    fontSize: 20,
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc'
  }
});

export default WaterContaminationScreen;
