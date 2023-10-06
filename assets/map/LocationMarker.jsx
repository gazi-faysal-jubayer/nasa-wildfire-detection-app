import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Adjust the icon library and icon name as needed

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <TouchableOpacity style={styles.marker} onPress={onClick}>
      <Icon name="fire-alert" size={24} color="red" /> {/* Replace 'fire-alert' with the actual icon name */}
    </TouchableOpacity>
  );
};

const styles = {
  marker: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default LocationMarker;
