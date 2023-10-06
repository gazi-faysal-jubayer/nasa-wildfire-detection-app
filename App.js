import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from './AuthContext';
import SplashScreen from './src/screens/SplashScreen';

import WaterContaminationScreen from './src/screens/models/WaterContaminationScreen';
import WildfirePredictionScreen from './src/screens/models/WildfirePredictionScreen';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Solution from './src/screens/Solution';
import Map from './src/screens/Map';
import User from './src/screens/User';
import LoginForm from './src/screens/LoginForm';
import SignupForm from './src/screens/SignupForm';
import Dashboard from './src/screens/Dashboard';


const Tab = createBottomTabNavigator();
const UserStack = createStackNavigator();

function UserStackNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <UserStack.Navigator initialRouteName={isLoggedIn ? 'Dashboard' : 'UserProfile'}>
      <UserStack.Screen name="UserProfile" component={User} />
      <UserStack.Screen name="LoginForm" component={LoginForm} />
      <UserStack.Screen name="SignupForm" component={SignupForm} />
      <UserStack.Screen name="Dashboard" component={Dashboard} />
      <UserStack.Screen name="WaterContamination" component={WaterContaminationScreen} />
      <UserStack.Screen name="WildfirePrediction" component={WildfirePredictionScreen} />
    </UserStack.Navigator>
  );
}


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      login: () => setIsLoggedIn(true),
      logout: () => setIsLoggedIn(false)
    }}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'About':
                iconName = focused ? 'information-circle' : 'information-circle-outline';
                break;
              case 'Solution':
                iconName = focused ? 'bulb' : 'bulb-outline';
                break;
              case 'Map':
                iconName = focused ? 'map' : 'map-outline';
                break;
              case 'User':
                iconName = focused ? 'person' : 'person-outline';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Solution" component={Solution} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="User" component={UserStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
