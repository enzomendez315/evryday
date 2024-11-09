import {React,useRef, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import LottieView from 'lottie-react-native';

const OnboardingScreen = ({ navigation }) => {

    const fadeAnim1 = useRef(new Animated.Value(0)).current; // Opacity for bubble 1
  const fadeAnim2 = useRef(new Animated.Value(0)).current; // Opacity for bubble 2
  const fadeAnim3 = useRef(new Animated.Value(0)).current; // Opacity for bubble 3

  // Animate speech bubbles to appear one after another
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim1, fadeAnim2, fadeAnim3]);
  
  
  return (
    // <View style={styles.container}>
    //   {/* Avatars Row */}
    //   <View style={styles.avatarsContainer}>
    //     {/* <LottieView source={require('../../src/animations/ape_loading.json')} autoPlay loop style={styles.avatar} />
    //     <LottieView source={require('../../src/animations/bear_loading.json')} autoPlay loop style={styles.avatar} />
    //     <LottieView source={require('../../src/animations/sloth_loading.json')} autoPlay loop style={styles.avatar} /> */}
    //     <Image source={require('../../src/images/all_three.png')} style={styles.avatar} />
    //   </View>

      <View style={styles.container}>
      {/*Avatars Row*/}
      <Image source={require('../../src/images/all_three.png')} style={styles.avatar} />

      <View style={styles.speechBubbleContainer}>
        <Animated.View style={{ ...styles.speechBubble, opacity: fadeAnim1 }}>
          <Text>Welcome to EvryDay!</Text>
        </Animated.View>
        <Animated.View style={{ ...styles.speechBubble, opacity: fadeAnim2 }}>
          <Text>We’re here to help track your food, sleep, and workouts!</Text>
        </Animated.View>
        <Animated.View style={{ ...styles.speechBubble, opacity: fadeAnim3 }}>
          <Text>Let’s get started on your wellness journey!</Text>
        </Animated.View>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Basic Info')}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  avatarsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,

  },
  avatar: {
    width: '90%',   
    height: undefined,  
    aspectRatio: 1, 
    resizeMode: 'contain',
  },
  speechBubbleContainer: {
    marginBottom: 40,
  },
  speechBubble: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 15,
  },
  getStartedText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
