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

function SalesReportScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const injectedJS = `
  setTimeout(function() {
    const hideElements = () => {
      const footer = document.getElementsByTagName("footer")[0];
      const nav = document.getElementsByTagName("nav")[0];
      const header = document.getElementsByTagName("header")[0];
      if (footer) footer.style.display = "none";
      if (nav) nav.style.display = "none";
      if (header) header.style.display = "none";
    };
    hideElements();
  }, 100); // Adjust the timeout as necessary
  true; // note: this is required, or you'll sometimes get an undefined error
`;

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
          <Text style={styles.title}>SALES REPORT</Text>
        </View>
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator style={styles.loader} />
          </View>
        )}
        <WebView
          source={{
            uri: 'https://usc.org.pk/sales-report/dashboard',
          }}
          javaScriptEnabled={true}
          injectedJavaScriptBeforeContentLoaded={injectedJS}
          onError={err => {
            setTimeout(() => {
              setLoading(false);
            }, 1000);
            console.log('error ===', err);
          }}
          onLoad={res => {
            setTimeout(() => {
              setLoading(false);
            }, 1000);
            console.log('loaded ===', res);
          }}
          style={[
            styles.iframe,
            {
              visibility: loading ? 'hidden' : 'show',
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
  loaderContainer: {
    height: 800,
    width: '100%',
    backgroundColor: 'white',
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

export default SalesReportScreen;
