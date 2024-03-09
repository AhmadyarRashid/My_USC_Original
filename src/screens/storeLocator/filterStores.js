import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';

import Dropdown from '../../shared/dropdown';

const serverUrl = 'https://fm.uscpak.com/api/v1';
const userId = 2;

const categoryList = {
  all: 'All',
  regular: 'Regular',
  sale_point: 'Sale Point',
  mobile: 'Mobile',
};

function FilterStoreScreen() {
  const navigation = useNavigation();

  const [zones, setZones] = useState([]);
  const [regions, setRegions] = useState([]);
  const [stores, setStores] = useState([]);

  const [localZoneId, setLocalZoneId] = useState(null);
  const [localRegionId, setLocalRegionId] = useState(null);
  const [localStoreId, setLocalStoreId] = useState(null);
  const [localCategory, setLocalCategory] = useState(categoryList.all);

  const [zoneLoading, setZoneLoading] = useState(false);
  const [regionLoading, setRegionLoading] = useState(false);
  const [storeLoading, setStoreLoading] = useState(false);

  const getUserZones = useCallback(() => {
    setZoneLoading(true);
    axios
      .get(`${serverUrl}/usc/user/zone?user_id=${userId}`)
      .then(response => {
        setZoneLoading(false);
        const res = response.data;
        const {isSuccess, payload, message} = res;
        if (isSuccess) {
          setZones(payload);
        } else {
          // toast.show({
          //   title: message || "Oops, Something went wrong.",
          //   placement: "bottom",
          // });
        }
      })
      .catch(error => {
        setZoneLoading(false);
        console.log('get zone error ===', error);
        // toast.show({
        //   title: "Oops, Something went wrong. Please try again later.",
        //   placement: "bottom",
        // });
      });
  }, []);

  const getUserRegions = useCallback(() => {
    setRegionLoading(true);
    axios
      .get(
        `${serverUrl}/usc/user/region?user_id=${userId}&zone_id=${localZoneId}`,
      )
      .then(response => {
        setRegionLoading(false);
        const res = response.data;
        const {isSuccess, payload, message} = res;
        if (isSuccess) {
          setRegions(payload);
        } else {
          // toast.show({
          //   title: message || "Oops, Something went wrong.",
          //   placement: "bottom",
          // });
        }
      })
      .catch(error => {
        setRegionLoading(false);
        console.log('get region error ===', error);
        // toast.show({
        //   title: "Oops, Something went wrong. Please try again later.",
        //   placement: "bottom",
        // });
      });
  }, [localZoneId]);

  const getUserStores = useCallback(() => {
    setStoreLoading(true);
    let url = `${serverUrl}/usc/region/stores?user_id=${userId}&region_id=${localRegionId}`;

    axios
      .get(url)
      .then(response => {
        setStoreLoading(false);
        const res = response.data;
        const {isSuccess, payload, message} = res;
        if (isSuccess) {
          const list = payload?.map(
            ({id, name, code, address, latitude, longitude}) => ({
              id,
              name: `${name}-${code}`,
              code,
              address,
              latitude,
              longitude,
            }),
          );
          setStores(list);
        } else {
          // toast.show({
          //   title: message || 'Oops, Something went wrong.',
          //   placement: 'bottom',
          // });
        }
      })
      .catch(error => {
        setStoreLoading(false);
        console.log('get store error ===', error);
        // toast.show({
        //   title: 'Oops, Something went wrong. Please try again later.',
        //   placement: 'bottom',
        // });
      });
  }, [localRegionId]);

  useEffect(() => {
    getUserZones();
  }, [getUserZones]);

  useEffect(() => {
    getUserRegions();
  }, [getUserRegions]);

  useEffect(() => {
    getUserStores();
  }, [getUserStores]);

  const onChangeZone = useCallback(
    value => {
      setLocalZoneId(zones.find(item => item.name === value)?.id);
    },
    [zones],
  );

  const onChangeRegion = useCallback(
    value => {
      setLocalRegionId(regions.find(item => item.name === value)?.id);
    },
    [regions],
  );

  const onChangeStore = useCallback(
    value => {
      setLocalStoreId(stores.find(item => item.name === value)?.id);
    },
    [stores],
  );

  const getStores = useMemo(() => {
    if (categoryList.all === localCategory) {
      return stores || [];
    } else if (categoryList.mobile === localCategory) {
      return stores?.filter(item => item?.category === 'mobile store') ?? [];
    } else if (categoryList?.sale_point === localCategory) {
      return stores?.filter(item => item?.category === 'sale_point') ?? [];
    } else {
      return stores?.filter(item => item?.category !== 'mobile store') ?? [];
    }
  }, [localCategory, stores]);

  const getDirectionHandler = useCallback(async () => {
    const selectedStore = stores?.find(item => item.id === localStoreId);
    if (
      selectedStore &&
      selectedStore?.latitude === 0 &&
      selectedStore?.longitude === 0
    ) {
      alert('Location not found');
    } else {
      await Linking.openURL(
        `https://maps.google.com/maps?q=${selectedStore?.latitude},${selectedStore?.longitude}`,
      );
    }
  }, [localStoreId, stores]);

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
              isLoading={zoneLoading}
              defaultButtonText="Select Zone"
              data={zones?.map(item => item?.name ?? '')}
              onSelect={onChangeZone}
            />
            <Dropdown
              isLoading={regionLoading}
              defaultButtonText="Select Region"
              data={regions?.map(item => item?.name)}
              onSelect={onChangeRegion}
            />
            <Dropdown
              defaultButtonText="Select Category"
              data={Object.values(categoryList)}
              onSelect={selVal => setLocalCategory(selVal)}
            />
            <Dropdown
              isLoading={storeLoading}
              defaultButtonText="Select Store"
              data={getStores?.map(item => item?.name ?? '')}
              onSelect={onChangeStore}
            />

            <TouchableOpacity
              style={styles.getDirectionBtn}
              onPress={() => getDirectionHandler()}>
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
