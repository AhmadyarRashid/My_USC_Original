import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/splash';
import DashboardScreen from '../screens/dashboard';
import ProductScreen from '../screens/products';
import StoreScreen from '../screens/storeLocator';
import { Button, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};

const ProfileScreen = () => {
  return <Text>This is a profile page</Text>;
};

function Navigation() {
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{title: 'Welcome'}}
  //       />
  //       <Stack.Screen name="Profile" component={ProfileScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="products" component={ProductScreen} />
        <Stack.Screen name="stores" component={StoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
