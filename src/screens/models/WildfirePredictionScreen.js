import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import cameraPng from '../../../assets/img/camera.png';

function WildfirePredictionScreen() {
  return (
    <View style={styles.container}>
      <Image source={cameraPng} style={styles.cameraIcon} />
      <Text style={styles.title}>Wildfire Prediction Screen</Text>
      <Text style={styles.description}>
        Sharing wildfire information with others is crucial to alert people in affected areas, coordinate firefighting efforts, and protect lives and property.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  cameraIcon: {
    width: 48,
    height: 48,
    marginBottom: 10,
    tintColor: '#666',
  },
  button: {
    backgroundColor: '#007AFF', // Button background color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20, // Add margin to separate the button from the description
  },
  buttonText: {
    color: '#FFF', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WildfirePredictionScreen;
