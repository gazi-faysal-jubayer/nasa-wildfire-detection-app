import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import sol1_1 from "../../assets/img/solution/sol1-1.png";
import sol1_2 from "../../assets/img/solution/sol1-2.png";
import sol1_3 from "../../assets/img/solution/sol1-3.png";
import sol1_4 from "../../assets/img/solution/sol1-4.png";

import sol2_1 from "../../assets/img/solution/sol2-1.png";
import sol2_2 from "../../assets/img/solution/sol2-2.png";
import sol2_3 from "../../assets/img/solution/sol2-3.png";
import sol2_4 from "../../assets/img/solution/sol2-4.png";

import sol3_1 from "../../assets/img/solution/sol3-1.png";
import sol3_2 from "../../assets/img/solution/sol3-2.png";
import sol3_3 from "../../assets/img/solution/sol3-3.png";

import sol4_1 from "../../assets/img/solution/sol4-1.png";
import sol4_2 from "../../assets/img/solution/sol4-2.png";
import sol4_3 from "../../assets/img/solution/sol4-3.png";

import sol5_1 from "../../assets/img/solution/sol5-1.png";
import sol5_2 from "../../assets/img/solution/sol5-2.png";
import sol5_3 from "../../assets/img/solution/sol5-3.png";

import sol6_1 from "../../assets/img/solution/sol6-1.png";
import sol6_2 from "../../assets/img/solution/sol6-2.png";
import sol6_3 from "../../assets/img/solution/sol6-3.png";
import sol6_4 from "../../assets/img/solution/sol6-4.png";

const Solution = () => {
  const [solutions] = useState([
    {
      title: "Fighting Wildfires with Real-Time Data",
      shortDesc: "NASA data integration for wildfire detection with real-time alerts through advanced geospatial analytics.",
      detailDesc: [
        {
          point: "NASA Data Integration: We seamlessly integrate NASA's real-time satellite imagery and environmental data using API integration. This includes data from MODIS (Moderate Resolution Imaging Spectroradiometer) and VIIRS (Visible Infrared Imaging Radiometer Suite) sensors aboard NASA's Earth-observing satellites.",
          img: sol1_1,
        },
        {
          point: "Geo-spatial Analytics: Through geospatial analytics, we create real-time maps and visualizations of identified wildfire hotspots. This involves coordinate transformation, georeferencing, and the use of GIS (Geographic Information Systems) tools.",
          img: sol1_3,
        },
        {
          point: "Alert System: When our system identifies a potential wildfire hotspot, it triggers an alert mechanism. This alert is sent to users via push notifications on the mobile app and is made available on our website for immediate action.",
          img: sol1_4,
        },
        // {
        //   point: "Data Processing: Our platform employs cutting-edge data processing algorithms and machine learning models for the real-time analysis of NASA's data. The primary focus is on identifying and mapping wildfire hotspots with precision.",
        //   img: sol1_2,
        // }
      ],
    },
    {
      title: "Connecting the World with Multilingual Access",
      shortDesc: "Multilingual Support, Cross-Platform Development, Social Media Integration, Instant Notifications",
      detailDesc: [
        {
          point: "Multilingual Support: Our platform utilizes multilingual natural language processing (NLP) algorithms to provide content translation. Users can select their preferred language, and the platform dynamically translates interface elements and alerts.",
          img: sol2_1,
        },
        {
          point: "Cross-Platform Development: The WildGuard mobile app is developed using cross-platform frameworks like React Native, ensuring compatibility with both iOS and Android devices. This allows for efficient app maintenance and updates.",
          img: sol2_2,
        },
        {
          point: "Social Media Integration: WildGuard enables users to share incidents and important alerts on popular social media platforms such as Facebook, Twitter, and Instagram. This feature enhances community engagement and awareness during environmental emergencies.",
          img: sol2_3,
        },
        {
          point: "Instant Notifications: Users receive instant push notifications on their mobile devices for critical alerts, including wildfire detections, water quality issues, and wildlife protection updates. These notifications keep users informed in real-time, fostering a sense of security and preparedness.",
          img: sol2_4,
        },
      ],
    },
    {
      title: "Guarding Our Water Resources with Precision",
      shortDesc: "Drone Technology, Water Quality Parameters, Community Empowerment",
      detailDesc: [
        {
          point: "Drone Technology: Our drones are equipped with high-resolution cameras, multispectral sensors, and onboard data storage. They use GPS and inertial navigation systems for precise positioning and flight path planning.",
          img: sol3_1,
        },
        {
          point: "Water Quality Parameters: WildGuard meticulously checks nine parameters to detect water contamination, ensuring the safety of local water sources. These parameters include pH levels, turbidity, dissolved oxygen, and more.",
          img: sol3_2,
        },
        {
          point: "Community Empowerment: We empower communities with accurate, real-time water quality data, helping them protect their health and environment. Users can access water quality reports through the mobile app and website.",
          img: sol3_3,
        },
      ],
    },
    {
      title: "Protecting Wildlife Amidst the Flames",
      shortDesc: "Drone Application, Instant Wildlife Alerts, Collaboration with Researchers",
      detailDesc: [
        {
          point: "Drone Application: During wildfires, our drone application prioritizes the detection and tracking of wildlife in affected areas. The drones capture video footage and images that are analyzed on the fly using AI algorithms.",
          img: sol4_1,
        },
        {
          point: "Instant Wildlife Alerts: If wildlife is at risk due to the fire's progression, our system generates instant alerts. These alerts are broadcast through the community alert system, ensuring swift and coordinated efforts to rescue and protect wildlife during wildfires.",
          img: sol4_2,
        },
        {
          point: "Collaboration with Researchers: Researchers and conservationists can collaborate with us to advance wildlife conservation efforts during and after wildfires. This promotes the preservation of biodiversity for future generations.",
          img: sol4_3,
        },
      ],
    },
    {
      title: "Unifying Communities with Rapid Alerts",
      shortDesc: "Integrated Siren Alerts, Alert Prioritization, Two-Way Communication",
      detailDesc: [
        {
          point: "Integrated Siren Alerts: Our system unites communities with integrated siren alerts, fostering swift, collective action in the face of imminent threats. By empowering communities, we enhance their resilience and ability to respond effectively to emergencies.",
          img: sol5_1,
        },
        {
          point: "Alert Prioritization: WildGuard's community alert system prioritizes alerts based on the severity and proximity of environmental threats. This ensures that communities receive timely and relevant information.",
          img: sol5_2,
        },
        {
          point: "Two-Way Communication: Users can provide feedback and report incidents through the mobile app, enabling two-way communication between communities and environmental authorities.",
          img: sol5_3,
        },
      ],
    },
    {
      title: "Continuous Coverage Even Offline",
      shortDesc: "Drone-to-Ground Communication, Onboard Data Storage and Processing, Drone-to-Base Station Communication, Data Transfer to Base Stations",
      detailDesc: [
        {
          point: "Drone-to-Ground Communication: We integrate communication modules on drones to establish direct communication with ground stations or radio towers within the range. This enables drones to transmit data via radio frequencies to relay stations or local radio stations, which can then broadcast the information to the community.",
          img: sol6_1,
        },
        {
          point: "Onboard Data Storage and Processing: Drones are equipped with onboard storage to temporarily store collected data. Real-time data processing on drones identifies potential wildfire incidents and prioritizes data capture.",
          img: sol6_2,
        },
        {
          point: "Drone-to-Base Station Communication: Base stations are established in remote communities where the internet is unavailable. Drones have the ability to establish a connection with these base stations using technologies like Wi-Fi, radio frequencies, or satellite communication.",
          img: sol6_3,
        },
        {
          point: "Data Transfer to Base Stations: When drones return to the base station, data is offloaded from the drones' onboard storage to the base station's local storage, ensuring data continuity and accessibility even in offline or remote areas.",
          img: sol6_4,
        },
      ],
    },
    // ... you can add more solutions here.
  ]);

  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {solutions.map((solution, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedSolution(solution)}
            style={[
              styles.solutionButton,
              {
                backgroundColor: selectedSolution === solution ? '#3498db' : 'transparent',
              },
            ]}
          >
            <Text
              style={[
                styles.solutionButtonText,
                {
                  color: selectedSolution === solution ? 'white' : 'black',
                },
              ]}
            >
              {solution.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.selectedSolutionContainer}>
        <Text style={styles.selectedSolutionTitle}>{selectedSolution.title}</Text>
        <Text style={styles.selectedSolutionShortDesc}>{selectedSolution.shortDesc}</Text>
        <Text style={styles.description}>Detailed Description:</Text>
        {selectedSolution.detailDesc.map((item, index) => (
          <View key={index} style={styles.detailItemContainer}>
            <Text style={styles.detailItemTitle}>{item.point.split(":")[0] + ":"}</Text>
            <Text style={styles.detailItemDescription}>{item.point.split(":").slice(1).join(":").trim()}</Text>
            <Image source={item.img} style={styles.detailItemImage} resizeMode="cover" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  solutionButton: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#3498db',
  },
  solutionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedSolutionContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    elevation: 5, // Add shadow on Android
    shadowColor: 'rgba(0, 0, 0, 0.2)', // Add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  selectedSolutionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedSolutionShortDesc:{
    marginBottom: 60,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },

  detailItemContainer: {
    marginBottom: 50,
  },
  detailItemTitle: {
    fontSize: 16,
    marginBottom:2,
    textDecorationLine: 'underline', // This will underline the title
    fontWeight: 'bold', // Make the title bold
  },
  detailItemDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },  
  detailItemImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default Solution;