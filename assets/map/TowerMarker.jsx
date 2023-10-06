import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'; // You may need to install this library if you haven't already

const TowerMarker = ({ lat, lng, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.locationMarker}>
        <Icon
          name="fire-alert" // Assuming you have an appropriate icon library for React Native
          type="material-community" // Adjust the icon type based on your icon library
          color="#c70039"
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  locationMarker: {
    backgroundColor: 'transparent', // You can customize the background color
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default TowerMarker;
