import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
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
    <View style={styles.container}>
      {/* Avatars Row */}
      <View style={styles.avatarsContainer}>
        <LottieView source={require('../../src/animations/ape_waving_hand.json')} autoPlay loop style={styles.avatar} />
        <LottieView source={require('../../src/animations/bear_clapping_hand.json')} autoPlay loop style={styles.avatar} />
        <LottieView source={require('../../src/animations/sloth_moving_hand.json')} autoPlay loop style={styles.avatar} />
      </View>

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  speechBubbleContainer: {
    marginBottom: 40,
  },
  speechBubble: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
  },
  getStartedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
