import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import About from './screens/About';
import Solution from './screens/Solution';
import Map from './screens/Map';
import User from './screens/User';
import LoginForm from './screens/LoginForm';
import SignupForm from './screens/SignupForm';

const Tab = createBottomTabNavigator();
const UserStack = createStackNavigator();

function UserStackNavigator() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="UserProfile" component={User} />
      <UserStack.Screen name="LoginForm" component={LoginForm} />
      <UserStack.Screen name="SignupForm" component={SignupForm} />
    </UserStack.Navigator>
  );
}


export default function App() {
  return (
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
  );
}
