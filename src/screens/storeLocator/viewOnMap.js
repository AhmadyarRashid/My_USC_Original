import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import MapView, {PROVIDER_DEFAULT, Marker} from 'react-native-maps';

const ViewOnMapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {stores} = route.params;

  console.log(JSON.stringify(stores, null, 2));

  const handleMarkerPress = async data => {
    const scheme = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${data.latitude},${data.longitude}`;
    const label = data.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

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

        <View style={{flex: 1}}>
          <MapView
            style={{flex: 1}}
            provider={PROVIDER_DEFAULT}
            initialRegion={{
              latitude: 30.3753,
              longitude: 69.3451,
              latitudeDelta: 20,
              longitudeDelta: 20,
            }}>
            {stores.map((item, index) => (
              <Marker
                key={index}
                coordinate={{
                  longitude: item.longitude,
                  latitude: item.latitude,
                }}
                onPress={() => handleMarkerPress(item)}
              />
            ))}
          </MapView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ViewOnMapScreen;

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
});
