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
import Dropdown from '../../shared/dropdown';

function FilterStoreScreen() {
  const navigation = useNavigation();
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
          <Text style={styles.title}>STORE LOCATOR</Text>
        </View>
        <ScrollView>
          <View style={styles.main}>
            <Dropdown
              defaultButtonText="Select Zone"
              data={['Egypt', 'Canada', 'Australia', 'Ireland']}
              onSelect={selVal => console.log('===', selVal)}
            />
            <Dropdown
              defaultButtonText="Select Region"
              data={['Egypt', 'Canada', 'Australia', 'Ireland']}
              onSelect={selVal => console.log('===', selVal)}
            />
            <Dropdown
              defaultButtonText="Select Category"
              data={['Egypt', 'Canada', 'Australia', 'Ireland']}
              onSelect={selVal => console.log('===', selVal)}
            />
            <Dropdown
              defaultButtonText="Select Store"
              data={['Egypt', 'Canada', 'Australia', 'Ireland']}
              onSelect={selVal => console.log('===', selVal)}
            />

            <TouchableOpacity style={styles.getDirectionBtn}>
              <Text style={styles.getDirectionBtnText}>Get Direction</Text>
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
  dashboardIcon: {
    marginTop: '4%',
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
    marginTop: '8%',
    marginBottom: '8%',
    paddingHorizontal: '8%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 18,
    color: 'gray',
  },
  getDirectionBtn: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    backgroundColor: '#F48423',
    marginTop: '8%',
    borderRadius: 12,
  },
  getDirectionBtnText: {
    color: 'white',
  },
});

export default FilterStoreScreen;
