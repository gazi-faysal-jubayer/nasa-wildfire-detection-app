import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationInfoBox = ({ info }) => {
  return (
    <View style={styles.locationInfo}>
      <Text style={styles.infoTitle}>Event Location Info</Text>
      <View style={styles.infoList}>
        <View style={styles.infoItem}>
          <Text>ID: </Text>
          <Text style={styles.infoValue}>{info.id}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text>STATUS: </Text>
          <Text style={styles.infoValue}>{info.status}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text>TITLE: </Text>
          <Text style={styles.infoValue}>{info.title}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text>DATE: </Text>
          <Text style={styles.infoValue}>{info.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationInfo: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoList: {
    flexDirection: 'column',
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoValue: {
    fontWeight: 'bold',
  },
});

export default LocationInfoBox;
    