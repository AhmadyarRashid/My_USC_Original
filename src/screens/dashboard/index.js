import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
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
          <Image source={require('./../../assets/logo_plan.png')} />
          <View style={styles.dashboardHeader}>
            <Image source={require('./../../assets/dashboardIcon.png')} />
            <Text style={styles.title}>Dashboard</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.main}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('stores')}>
              <Image source={require('./../../assets/locationIcon.png')} />
              <View style={styles.twoLineText}>
                <Text style={styles.btnTitle}>STORE LOCATOR</Text>
                <Text style={styles.urduText}>سٹور کی جگہ معلوم کریں</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('subsidized-products')}>
              <Image source={require('./../../assets/productIcon.png')} />
              <View style={styles.twoLineText}>
                <Text style={styles.btnTitle}>SUBSIDIZED PRODUCTS</Text>
                <Text style={styles.urduText}>سبسڈی یافتہ مصنوعات</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('regular-products')}>
              <Image source={require('./../../assets/other_products.png')} />
              <View style={styles.twoLineText}>
                <Text style={styles.btnTitle}>OTHER PRODUCTS</Text>
                <Text style={styles.urduText}>دیگر مصنوعات</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('ramzan-eligibility')}>
              <Image source={require('./../../assets/pmt.png')} />
              <View style={styles.twoLineText}>
                <Text style={styles.btnTitle}>RAMAZAN ELIGIBILITY</Text>
                <Text style={styles.urduText}>رمضان پیکج کی اہلیت چیک کریں</Text>
              </View>
            </TouchableOpacity>
            {/*<TouchableOpacity*/}
            {/*  style={styles.btn}*/}
            {/*  onPress={() => navigation.navigate('reports')}>*/}
            {/*  <Image source={require('./../../assets/reportIcon.png')} />*/}
            {/*  <View style={styles.twoLineText}>*/}
            {/*    <Text style={styles.btnTitle}>SALES REPORT</Text>*/}
            {/*    <Text style={styles.urduText}>فروخت کی رپورٹ</Text>*/}
            {/*  </View>*/}
            {/*</TouchableOpacity>*/}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('instructions')}>
              <Image source={require('./../../assets/instructionIcon.png')} />
              <View style={styles.twoLineText}>
                <Text style={styles.btnTitle}>HOW TO USE APP</Text>
                <Text style={styles.urduText}> ایپ استمال کرنے کا طریقہ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardHeader: {
    marginTop: '2%',
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
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  btnSubTitle: {
    marginLeft: 8,
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
  twoLineText: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  urduText: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
  },
});

export default DashboardScreen;
