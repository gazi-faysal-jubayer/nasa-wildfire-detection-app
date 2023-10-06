import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';

import towersData from '../../assets/map/towers.json';
import waterData from '../../assets/map/water.json';
import satelliteData from '../../assets/map/satellite.json';

import towerMarkerPng from '../../assets/img/icons/tower-marker.png';
import goodWaterPng from '../../assets/img/icons/good-water.png';
import badWaterPng from '../../assets/img/icons/bad-water.png';
import onFireMarkerPng from '../../assets/img/icons/on-fire.png';
import offFireMarkerPng from '../../assets/img/icons/off-fire.png';
import fireMarkerPng from '../../assets/img/icons/satellite-fire.png';



export default function Map() {
  const [displayData, setDisplayData] = useState('events');
  const [eventData, setEventData] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);
  const [displayEventsLayer, setDisplayEventsLayer] = useState(true);
  const [displayTowersLayer, setDisplayTowersLayer] = useState(true);
  // Add more state variables for other layers if needed


  const totalYear = 1;
  const radius = 7000;
  let zoom = 7;
  const currentDate = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(currentDate.getFullYear() - totalYear);

  const [userLocation, setUserLocation] = useState(null);

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location for XYZ feature.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // You can now safely call Geolocation.getCurrentPosition
        Geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            setUserLocation({ lat: userLat, lng: userLng });
  
            const nearbyLocations = getLocationsWithinRadius(userLat, userLng, radius);
            console.log('Nearby locations:', nearbyLocations);
          },
          (error) => {
            console.error('Error getting user location:', error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let distance =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    distance = Math.acos(distance);
    distance = (distance * 180) / Math.PI;
    distance = distance * 60 * 1.1515; // Miles
    distance = distance * 1.609344; // Kilometers
    return distance;
  };

  const getLocationsWithinRadius = (userLat, userLng, radius) => {
    const nearbyLocations = eventData.filter((event) => {
      const eventLat = event.geometry[0].coordinates[1];
      const eventLng = event.geometry[0].coordinates[0];
      const distance = calculateDistance(userLat, userLng, eventLat, eventLng);
      return distance <= radius;
    });
    return nearbyLocations;
  };

  const handleNearMeClick = () => {
    requestLocationPermission();
  };
  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
        const data = await response.json();
        setEventData(data.events);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleToggleLayers = () => {
    // Implement the logic for toggling layers here
  };

  const handleLayerClick = (layerName) => {
    // Implement the logic for handling layer click here
    console.log(`Clicked on layer: ${layerName}`);
  };

  const renderNearMeButton = () => (
    <Button title="Near Me" onPress={handleNearMeClick} />
  );

  const renderLayers = () => {
    if (displayLayers) {
      return (
        <View style={styles.layersMenu}>
          <Text style={styles.layer} onPress={() => handleLayerClick('Events')}>
            Events
          </Text>
          <Text style={styles.layer} onPress={() => handleLayerClick('Towers')}>
            Towers
          </Text>
          {/* Add more layers here in the future */}
        </View>
      );
    }
    return null;
  };

  const handleFilterChange = (value) => {
    setDisplayData(value);
  };

  const renderMarkers = () => {
    if (displayData === 'events') {
      const recentMarkers = eventData.map((ev) => {
        if (ev.categories[0].id === "wildfires") {
          const dateTime = ev.geometry[0].date.match(/\d+/g).map(Number).slice(0, 3);
          const yearDifference = dateTime[0] - oneYearAgo.getFullYear();
  
          const dateTimeFire = new Date(dateTime.join('-'));
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const formattedDate = dateTimeFire.toLocaleDateString('en-US', options);
          if (yearDifference === 0 || yearDifference === 1) {
            if (dateTime[1] >= oneYearAgo.getMonth() + 1){
              return (
                <Marker
                  key={ev.id}
                  coordinate={{
                    latitude: ev.geometry[0].coordinates[1],
                    longitude: ev.geometry[0].coordinates[0],
                  }}
                  title={ev.title}
                  onPress={() => setLocationInfo({
                    id: ev.id,
                    status: "Active",
                    title: ev.title,
                    date: formattedDate,
                  })}

                  image={onFireMarkerPng}
                  style={{ width: 60, height: +0 }}
                />
              );
            }
          }
        }
        return null;
      });
  
      const oldMarkers = eventData.map((ev) => {
        if (ev.categories[0].id === "wildfires") {
          const dateTime = ev.geometry[0].date.match(/\d+/g).map(Number).slice(0, 3);
          const yearDifference = dateTime[0] - oneYearAgo.getFullYear();
  
          const dateTimeFire = new Date(dateTime.join('-'));
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const formattedDate = dateTimeFire.toLocaleDateString('en-US', options);
          if (yearDifference ==! 0 || yearDifference ==! totalYear) {
            if (dateTime[1] <= oneYearAgo.getMonth()){
              return (
                <Marker
                  key={ev.id}
                  coordinate={{
                    latitude: ev.geometry[0].coordinates[1],
                    longitude: ev.geometry[0].coordinates[0],
                  }}
                  title={ev.title}
                  onPress={() => setLocationInfo({
                    id: ev.id,
                    status: "Inactive",
                    title: ev.title,
                    date: formattedDate,
                  })}

                  image={offFireMarkerPng}
                  style={{ width: 40, height: 40 }}
                  
                />
              );
            }
          }
        }
        return null;
      });
      return [...recentMarkers, ...oldMarkers];
    } else if (displayData === 'towers') {
      return towersData.events.map((tower, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: tower.latitude,
            longitude: tower.longitude,
          }}
          title={`Tower ${index + 1}`}
          onPress={() => setLocationInfo({
            id: index,
            title: "Tower Location"
          })}

          image={towerMarkerPng}
          style={{ width: 40, height: 40 }}
        />
      ));
    } else if (displayData === 'water') {
      return waterData.events.map((water, index) => {
        const image =
          water.contamination === 0 ? goodWaterPng : badWaterPng;
        
        const waterTitle = 
          water.contamination === 0 ? "Safe Water" : "Contaminated Water";
        
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: water.latitude,
              longitude: water.longitude,
            }}
            title={`${waterTitle}`}
            onPress={() =>
              setLocationInfo({
                id: index,
                title: "Water Contamination Location",
              })
            }
            image={image}
            style={{ width: 50, height: 50 }}
          />
        );
      });
    } else if (displayData === 'satellite') {
      return satelliteData.events.map((satellite, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: satellite.latitude,
            longitude: satellite.longitude,
          }}
          title={`Satellite ${index + 1}`}
          onPress={() => setLocationInfo({
            id: index,
            title: "Satellite Location"
          })}

          image={fireMarkerPng}
          style={{ width: 40, height: 40 }}
        />
      ));
    }
    
    
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.5, // Adjust to your desired initial latitude
          longitude: -119.0, // Adjust to your desired initial longitude
          latitudeDelta: 2.0, // Adjust the initial zoom level
          longitudeDelta: 2.0, // Adjust the initial zoom level
        }}
      >
        {renderMarkers()}
      </MapView>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={displayData}
          onValueChange={(itemValue) => handleFilterChange(itemValue)}
        >
          <Picker.Item label="Wildfire Hotspot Data" value="events" />
          <Picker.Item label="Tower Data" value="towers" />
          <Picker.Item label="Water Contamination Data" value="water" />
          <Picker.Item label="Real Time Satellite Data" value="satellite" />
          {/* Add more Picker.Item components for future layers */}
        </Picker>
      </View>

      {locationInfo && (
        <View>
          <Text>{locationInfo.title}</Text>
          {/* Display other location information here */}
        </View>
      )}
    </View>
  );
}

const styles = {
  layersMenu: {
    flexDirection: 'row',
  },
  layer: {
    padding: 8,
  },
  dropdownContainer: {
    backgroundColor: 'white', // Set a background color for the dropdown
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 10,
  },
};
