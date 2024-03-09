import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/splash';
import DashboardScreen from '../screens/dashboard';
import ProductScreen from '../screens/products';
import StoreScreen from '../screens/storeLocator';
import RegularProductsScreen from '../screens/regularProducts';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="dashboard" component={DashboardScreen} />
      <Stack.Screen name="subsidized-products" component={ProductScreen} />
      <Stack.Screen name="regular-products" component={RegularProductsScreen} />
      <Stack.Screen name="stores" component={StoreScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
