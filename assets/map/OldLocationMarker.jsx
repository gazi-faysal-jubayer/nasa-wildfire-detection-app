import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // You need to import an appropriate icon library for React Native

const OldLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.marker}>
        <Icon name="fire-alert" size={30} color="black" style={styles.locationIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  marker: {
    backgroundColor: 'transparent', // You can customize the marker's background color
    borderRadius: 20,
    padding: 10,
  },
  locationIcon: {
    fontSize: 30,
  },
};

export default OldLocationMarker;
