import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/splash';
import DashboardScreen from '../screens/dashboard';
import ProductScreen from '../screens/products';
import StoreScreen from '../screens/storeLocator';
import RegularProductsScreen from '../screens/regularProducts';
import InstructionsScreen from '../screens/instructions';
import RamazanEligibilityScreen from '../screens/ramzanEligibility';
import FilterStoreScreen from '../screens/storeLocator/filterStores';
import SalesReportScreen from '../screens/salesReport';
import VideoPlayerScreen from '../screens/videoPlayer';
import FilterProvinceStoreScreen from '../screens/storeLocator/filterProvince';
import ViewOnMapScreen from '../screens/storeLocator/viewOnMap';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="filter-stores"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="dashboard" component={DashboardScreen} />
      <Stack.Screen name="subsidized-products" component={ProductScreen} />
      <Stack.Screen name="regular-products" component={RegularProductsScreen} />
      <Stack.Screen
        name="ramzan-eligibility"
        component={RamazanEligibilityScreen}
      />
      <Stack.Screen name="stores" component={StoreScreen} />
      <Stack.Screen name="filter-stores" component={FilterStoreScreen} />
      <Stack.Screen
        name="filter-province-stores"
        component={FilterProvinceStoreScreen}
      />
      <Stack.Screen name="reports" component={SalesReportScreen} />
      <Stack.Screen name="video" component={VideoPlayerScreen} />
      <Stack.Screen name="instructions" component={InstructionsScreen} />
      <Stack.Screen name="ViewOnMap" component={ViewOnMapScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
