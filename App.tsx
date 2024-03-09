import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from './src/screens/splash';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <SplashScreen />
    </SafeAreaView>
  );
}


export default App;
