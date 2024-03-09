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
        source={require('./../../assets/background.png')}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.dashboardIcon}
            source={require('./../../assets/dashboardIcon.png')}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>INSTRUCTIONS</Text>
        </View>
        <ScrollView>
          <View style={styles.main}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sollicitudin erat ligula, tempus mollis sem sodales
              nec. Nullam ullamcorper efficitur luctus. Vestibulum lobortis sit
              amet nisl cursus vulputate. Morbi convallis lectus odio, a
              ullamcorper arcu faucibus nec. Duis quis suscipit diam. Mauris
              dictum ante purus, vel ultricies massa dignissim ac. Sed at sem
              velit. Integer vel leo interdum, ultrices odio ac, rutrum massa.
              Morbi commodo lectus magna, id malesuada dui hendrerit quis.
              Praesent ac volutpat odio. Donec dapibus facilisis velit ut
              commodo. Donec purus nisl, pharetra id mollis ut, convallis eu
              leo. Nam tincidunt facilisis purus, sit amet eleifend sapien
              condimentum et. Donec dapibus aliquet ante eget gravida.
              Suspendisse nec ipsum libero. Morbi hendrerit non neque sit amet
              rhoncus. Nam id quam laoreet, cursus quam at, tincidunt felis.
              Nunc feugiat tincidunt ex, ac luctus nibh interdum et. Cras
              pharetra ligula nisi, a dignissim nunc ultrices ac. Quisque
              scelerisque ultricies est ac porttitor. Aliquam ut augue sed enim
              vulputate ultrices nec eget elit. Nulla magna ante, accumsan non
              erat eu, finibus tincidunt sapien. Vestibulum quis pretium neque.
              Suspendisse quam lacus, ullamcorper id dolor vitae, semper
              sollicitudin justo. Morbi sed mattis risus. Vivamus ut tempor
              lorem, a rutrum lectus. Donec ut nunc ac mauris laoreet finibus.
              Quisque non sapien blandit, iaculis lacus et, tempus lectus. Proin
              imperdiet elit sed nibh imperdiet semper. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Morbi fringilla accumsan odio,
              eget varius augue dictum sed. Nunc quis porttitor augue, vitae
              faucibus ante. Vestibulum ut rutrum libero, id fermentum nulla.
              Duis ac ante in nisi blandit lobortis at a massa. Duis faucibus
              dui ac facilisis egestas. Fusce urna orci, lacinia eu leo vel,
              feugiat viverra quam. Maecenas tellus nibh, vestibulum a maximus
              vel, feugiat pulvinar nisl. Ut et rutrum justo. Integer semper
              consectetur sem, vitae laoreet ipsum scelerisque nec. Quisque
              felis neque, ultrices at lobortis ut, mattis pretium mi.
              Vestibulum turpis dui, eleifend quis sapien vel, aliquet finibus
              urna. urna. Viva-mus sodales, lectus non maximus mollis, dolor ex
              gravida arcu, vitae viverra nisl nulla et neque. Etiam maximus sem
              lacus, vel iaculis nunc egestas vel. Vestibulum dictum urna vel
              libero posuere, a viverra massa placerat. Curabitur dictum urna et
              congue tempor. In in purus consectetur, ornare purus et, dictum
              libero. Mauris at augue eu felis bibendum vulputate. Donec
              ultricies pulvinar elementum. Mauris vel risus id eros maximus
              faucibus. Phasellus ullamcorper dignissim vulputate. Nulla id
              vehicula enim, eu ultrices justo. Pellentesque mollis laoreet
              justo non ullamcorper. Morbi molestie pulvinar nunc id cursus.
              Cras sollicitudin luctus turpis in dignissim. Duis sollicitudin
              accumsan nisl.
            </Text>
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
});

export default InstructionScreen;
