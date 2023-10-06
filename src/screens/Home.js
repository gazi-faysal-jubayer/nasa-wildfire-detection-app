import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Animated} from 'react-native';
import Swiper from 'react-native-swiper';
import Typewriter from 'react-native-typewriter';

const Hero = () => {
  const slideImages = [
    require('../../assets/img/slider/1.png'),
    require('../../assets/img/slider/2.png'),
    require('../../assets/img/slider/3.png'),
    require('../../assets/img/slider/4.png'),
    require('../../assets/img/slider/5.png'),
    require('../../assets/img/slider/6.png'),
    // Add more slide images as needed
  ];

  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={false}
        autoplay
        autoplayTimeout={5}
        loop
        style={styles.slider}
      >
        {slideImages.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.slideImage} />
          </View>
        ))}
      </Swiper>
      <View style={styles.textContainer}>
      <Text style={styles.teamText}>Team Mohakorsho</Text>
        <Text style={styles.alertText}>We will alert people from Wildfire through</Text>
        <AnimatedTypewriter strings={['NASA API']} />
        <AnimatedTypewriter strings={['Native Information']} />
        <AnimatedTypewriter strings={['Machine Learning']} />
        <AnimatedTypewriter strings={['Robotics']} />
      </View>
      {/* Add your social links or buttons here */}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: '100%', // Adjust the height of the image carousel as needed
    resizeMode: 'cover',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    flex: 1,
    width: width,
    height: undefined, // Height is calculated automatically to maintain aspect ratio
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: 100,
    left: 20,
  },
  teamText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  alertText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
  },
  typedText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    opacity: 0.5
  },
});

const AnimatedTypewriter = ({ strings }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity }}>
      <Typewriter
        style={styles.typedText}
        typing={1}
        continuous={true}
        loop={true}
      >
        {strings}
      </Typewriter>
    </Animated.View>
  );
};

export default Hero;