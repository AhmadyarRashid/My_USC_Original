import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

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
  return (
    <ImageBackground
      style={styles.container}
      source={require('./../../assets/light_background.png')}>
      <Image
        style={styles.dashboardIcon}
        source={require('./../../assets/dashboardIcon.png')}
      />
      <View style={styles.header}>
        <Text style={styles.title}>OUR PRODUCTS</Text>
      </View>
      <ScrollView>
        <View style={styles.main}>
          {productList.map(item => (
            <View key={item.id} style={styles.card}>
              <Image style={styles.productImg} source={item.image} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>Rs {item.price}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.seeMoreBtn}>
          <Text style={styles.btnText}>Show All</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dashboardIcon: {
    marginLeft: '10%',
  },
  header: {
    marginTop: '8%',
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
  price: {
    alignSelf: 'center',
  },
  seeMoreBtn: {
    marginTop: '2%',
    paddingVertical: 12,
    paddingHorizontal: 22,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#F48423',
  },
  btnText: {
    color: 'white',
  },
});

export default ProductScreen;
