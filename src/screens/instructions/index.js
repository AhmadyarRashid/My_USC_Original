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

function InstructionScreen() {
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
          <Text style={styles.title}>INSTRUCTIONS</Text>
        </View>
        <ScrollView>
          <View style={styles.main}>
            <Text style={styles.content}>
              1. To find USC store please press{' '}
              <Text style={styles.highlightedText}>Store Locator Button.</Text>
              {'\n'}
              {'\n'}
              2. To search for your desired USC store apply{' '}
              <Text style={styles.highlightedText}>
                Filters. Zone, Region & Category.
              </Text>
              {'\n'}
              {'\n'}
              3. To open list of Subsidized Products press{' '}
              <Text style={styles.highlightedText}>
                Subsidized Products Button.
              </Text>
              {'\n'}
              {'\n'}
              4. To open the list of Other Products press{' '}
              <Text style={styles.highlightedText}>Other Products Button.</Text>
            </Text>
            <Text style={styles.urduTitle}>ہدایات</Text>
            <Text style={styles.content}>
              1. سٹور تلاش کرنے کے لیے براہ کرم اسٹور لوکیٹر بٹن کو دبائیں ۔ 
                2. اپنے مطلوبہ USC اسٹور کو تلاش کرنے کے لیے  فلٹرز لگائیں. زون،
              علاقہ اور زمرہ ۔  3. سبسڈی والی مصنوعات کی فہرست کھولنے کے لیے
              سبسڈی والی مصنوعات کا بٹن دبائیں ۔   4. دیگر مصنوعات کی فہرست کو
              کھولنے کے لیے دیگر مصنوعات کا بٹن دبائیں .
            </Text>
            <TouchableOpacity
              style={styles.watchBtn}
              onPress={() => navigation.navigate('video')}>
              <Text style={styles.watchBtnText}>Watch Video Guide</Text>
              <Text style={styles.watchBtnText}>ویڈیو گائیڈ دیکھیں</Text>
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
    marginBottom: '12%',
    paddingHorizontal: '8%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 18,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  highlightedText: {
    color: '#F48423',
  },
  urduTitle: {
    marginTop: 20,
    color: '#81BB50',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  watchBtn: {
    marginTop: '8%',
    borderRadius: 22,
    backgroundColor: '#F48423',
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  watchBtnText: {
    color: 'white',
    alignSelf: 'center',
  },
});

export default InstructionScreen;
