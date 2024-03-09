import React from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';

function SplashScreen() {
  return (
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
        <Image
          source={require('./../../assets/basket.png')}
          style={styles.shoppingCart}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
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
