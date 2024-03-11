import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator, Text,
} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

function VideoPlayerScreen() {
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
          <Text style={styles.title}>VIDEO</Text>
        </View>
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator style={styles.loader} />
          </View>
        )}
        <WebView
          injectedJavaScriptBeforeContentLoaded={injectedJS}
          source={{
            uri: 'https://usc.org.pk/my-usc/video',
          }}
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
          javaScriptEnabled={true}
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
  loaderContainer: {
    height: 800,
    width: '100%',
    backgroundColor: 'white',
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

export default VideoPlayerScreen;
