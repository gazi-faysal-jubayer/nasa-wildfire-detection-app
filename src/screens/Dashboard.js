import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.modelContainer}>
        <Text style={styles.modelTitle}>Water Contamination Predictor</Text>
        <Text style={styles.modelDescription}>Predict the contamination state of water sources using our advanced ML model.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WaterContamination')}>
          <Text style={styles.buttonText}>Water Contamination</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.modelContainer}>
        <Text style={styles.modelTitle}>Wildfire Informed System</Text>
        <Text style={styles.modelDescription}>Anticipate the likelihood of wildfires in your region with our tools.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WildfirePrediction')}>
          <Text style={styles.buttonText}>Wildfire Informed</Text>
        </TouchableOpacity>
      </View>

      {/* Add more model sections as necessary */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  modelContainer: {
    marginBottom: 40,
  },
  modelTitle: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  modelDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
});

export default Dashboard;
