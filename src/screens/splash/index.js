import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./../../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>MY USC</Text>
        <Image
          source={require('./../../assets/basket.png')}
          style={styles.shoppingCart}
        />
      </View>
    </View>
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
    color: '#F48323',
    fontSize: 24,
    fontWeight: 'bold',
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
