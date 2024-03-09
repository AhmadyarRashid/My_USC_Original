import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const productList = [
  {
    id: 1,
    image: require('../../assets/products/atta.png'),
    name: 'Tota Rice',
    price: 120,
  },
  {
    id: 2,
    image: require('../../assets/products/atta.png'),
    name: 'Basmati Rice',
    price: 128,
  },
  {
    id: 3,
    image: require('../../assets/products/atta.png'),
    name: 'Sila Rice',
    price: 340,
  },
  {
    id: 4,
    image: require('../../assets/products/atta.png'),
    name: 'Dates',
    price: 800,
  },
  {
    id: 5,
    image: require('../../assets/products/atta.png'),
    name: 'White Channa',
    price: 380,
  },
  {
    id: 6,
    image: require('../../assets/products/atta.png'),
    name: 'Basin',
    price: 150,
  },
  {
    id: 7,
    image: require('../../assets/products/atta.png'),
    name: 'Tea',
    price: 220,
  },
];

function ProductScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.container}
        source={require('./../../assets/light_background.png')}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.dashboardIcon}
            source={require('./../../assets/back.png')}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>SUBSIDIZED</Text>
          <Text style={styles.subTitle}>PRODUCTS</Text>
        </View>
        {loading && <ActivityIndicator style={styles.loader} />}
        <WebView
          source={{
            uri: 'https://usc.org.pk/subsidized-products',
          }}
          onError={err => {
            setLoading(false);
            console.log('error ===', err);
          }}
          onLoad={res => {
            setLoading(false);
            console.log('loaded ===', res);
          }}
          style={styles.iframe}
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
  },
  dashboardIcon: {
    marginTop: '4%',
    marginLeft: '10%',
  },
  header: {
    marginTop: '8%',
    display: 'flex',
    flexDirection: 'column',
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
    marginHorizontal: '4%',
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    marginBottom: 8,
    padding: 12,
    width: '42%',
    borderColor: '#81BB50',
    borderWidth: 2,
    borderRadius: 20,
  },
  productImg: {
    alignSelf: 'center',
  },
  productName: {
    marginTop: 4,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  loader: {
    marginTop: '12%',
  },
  price: {
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: 20,
    color: '#81BB50',
    marginLeft: 8,
  },
});

export default ProductScreen;
