import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

function StoreScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.container}
        source={require('./../../assets/light_background.png')}>
        <View style={styles.controlHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.dashboardIcon}
              source={require('./../../assets/back.png')}
            />
          </TouchableOpacity>
          <Image source={require('./../../assets/logo_plan.png')} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>STORE LOCATOR</Text>
          <Text style={styles.subTitle}>سٹور کی جگہ معلوم کریں</Text>
        </View>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => navigation.navigate('filter-stores')}>
          <Text style={styles.filterBtnText}>
            FILTER By Zone & Region | فلٹر
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => navigation.navigate('filter-province-stores')}>
          <Text style={styles.filterBtnText}>
            FILTER By Province & District | فلٹر
          </Text>
        </TouchableOpacity>
        {loading && <ActivityIndicator style={styles.loader} />}
        <WebView
          source={{
            uri: 'https://www.google.com/maps/d/u/0/embed?mid=1Vb9BZU8gR0QsNd8kBWFZn0M9lhk27Xg&ehbc=2E312F&noprof=1',
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
  controlHeader: {
    marginTop: '5%',
    marginHorizontal: '8%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 20,
    color: '#81BB50',
    fontWeight: '900',
    marginLeft: 8,
  },
  main: {
    marginHorizontal: '4%',
    marginTop: '8%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  filterBtn: {
    marginTop: '3%',
    width: '90%',
    paddingVertical: 12,
    paddingHorizontal: 22,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#81BB50',
  },
  filterBtnText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  iframe: {
    width: '100%',
    height: '50%',
    zIndex: 999,
    marginTop: '2%',
  },
  loader: {
    marginTop: '12%',
  },
  subTitle: {
    fontSize: 20,
    color: '#81BB50',
    marginLeft: 8,
  },
});

export default StoreScreen;
