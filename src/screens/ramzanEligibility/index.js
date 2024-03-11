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

function RamazanEligibilityScreen() {
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
          <Text style={styles.title}>RAMAZAN ELIGIBILITY</Text>
        </View>
        {loading && <ActivityIndicator style={styles.loader} />}
        <WebView
          source={{
            uri: 'https://helpdesk.uscpak.com/ramazan/subsidy/score/search',
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
    marginTop: '2%',
    width: '60%',
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

export default RamazanEligibilityScreen;
