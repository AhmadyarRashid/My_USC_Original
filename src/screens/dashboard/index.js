import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

function DashboardScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.container}
        source={require('./../../assets/background.png')}>
        <View style={styles.header}>
          <Image source={require('./../../assets/dashboardIcon.png')} />
          <Text style={styles.title}>Dashboard</Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('stores')}>
            <Image source={require('./../../assets/locationIcon.png')} />
            <Text style={styles.btnTitle}>STORE LOCATOR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('products')}>
            <Image source={require('./../../assets/productIcon.png')} />
            <Text style={styles.btnTitle}>OUR PRODUCTS</Text>
          </TouchableOpacity>
        </View>
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
  },
  header: {
    marginTop: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#81BB50',
    fontWeight: '900',
    marginLeft: 8,
  },
  main: {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: '5%',
    width: '80%',
    padding: 12,
    backgroundColor: '#81BB50',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnTitle: {
    marginLeft: 8,
    color: 'white',
    fontSize: 26,
  },
});

export default DashboardScreen;
