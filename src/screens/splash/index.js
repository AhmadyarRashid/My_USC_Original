import React, {useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

function SplashScreen() {
  const navigation = useNavigation();
  const moveAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'login'}],
      });
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  useEffect(() => {
    // Get screen width
    const {width} = Dimensions.get('window');

    // Calculate the target X position to center the image
    // Assuming the image width is 100, adjust this based on your actual image width for accurate centering
    const toValue = width / 2 - 120;

    // Start the animation
    Animated.timing(moveAnimation, {
      toValue,
      duration: 3000,
      useNativeDriver: true, // Use the native driver for better performance
    }).start();
  }, [moveAnimation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.container}
        source={require('./../../assets/background.png')}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./../../assets/logo.png')}
            style={styles.logo}
          />
          <Image
            style={styles.title}
            source={require('./../../assets/my_usc.png')}
          />
        </View>
        <Animated.Image
          source={require('./../../assets/basket.png')}
          style={[
            styles.shoppingCart,
            {
              transform: [{translateX: moveAnimation}],
            },
          ]}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 20,
  },
  shoppingCartContainer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  shoppingCart: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
