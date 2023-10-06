import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TowerInfoBox = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Event Location Info</Text>
      <View style={styles.infoContainer}>
        <Text>ID: <Text style={styles.boldText}>{info.id}</Text></Text>
        <Text>STATUS: <Text style={styles.boldText}>{info.status}</Text></Text>
        <Text>TITLE: <Text style={styles.boldText}>{info.title}</Text></Text>
        <Text>DATE: <Text style={styles.boldText}>{info.date}</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoContainer: {
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default TowerInfoBox;
