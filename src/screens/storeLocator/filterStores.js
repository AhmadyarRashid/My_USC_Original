import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
  mobile: 'Mobile & Static store',
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
          setStores(payload);
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
    if (categoryList.regular === localCategory) {
      return (
        stores?.filter(
          item =>
            item?.category !== 'mobile store' ||
            item?.category !== 'sale_point',
        ) ?? []
      );
    } else if (categoryList.mobile === localCategory) {
      return (
        stores?.filter(
          item =>
            item?.category === 'mobile store' ||
            item?.category === 'sale_point',
        ) ?? []
      );
    } else {
      return stores || [];
    }
  }, [localCategory, stores]);

  const getSelectedStore = useMemo(
    () => stores?.find(item => item.id === localStoreId),
    [localStoreId, stores],
  );

  const getDirectionHandler = useCallback(async () => {
    if (
      getSelectedStore &&
      getSelectedStore?.latitude === 0 &&
      getSelectedStore?.longitude === 0
    ) {
      alert('Location not found');
    } else {
      await Linking.openURL(
        `https://maps.google.com/maps?q=${getSelectedStore?.latitude},${getSelectedStore?.longitude}`,
      );
    }
  }, [getSelectedStore]);

  const goToViewOnMap = useCallback(() => {
    navigation.navigate(`ViewOnMap`, {
      stores,
    });
  }, [navigation, stores]);

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
          <Text style={styles.title}>STORE LOCATOR</Text>
          <Text style={styles.subTitle}>سٹور کی جگہ معلوم کریں</Text>
        </View>
        <ScrollView>
          <View style={styles.main}>
            <Dropdown
              isLoading={zoneLoading}
              defaultButtonText="Select Zone | زون منتخب کریں"
              data={zones
                ?.filter(item => item?.short_code !== 'ho')
                ?.map(item => item?.name ?? '')}
              onSelect={onChangeZone}
            />
            <Dropdown
              isLoading={regionLoading}
              defaultButtonText="Select Region | علاقہ منتخب کریں"
              data={regions?.map(item => item?.name)}
              onSelect={onChangeRegion}
            />
            <Dropdown
              defaultButtonText="Select Category | قسم منتخب کریں"
              data={Object.values(categoryList)}
              onSelect={selVal => setLocalCategory(selVal)}
            />
            <Dropdown
              isLoading={storeLoading}
              defaultButtonText="Select Store | اسٹور کو منتخب کریں"
              data={getStores?.map(item => item?.name ?? '')}
              onSelect={onChangeStore}
            />
            {getSelectedStore && (
              <View style={styles.storeDetail}>
                {getSelectedStore?.incharge_name && (
                  <Text style={styles.storeDetailInfo}>
                    <Text style={styles.storeDetailTitle}>Contact Person:</Text>
                    {'\n'}
                    {getSelectedStore?.incharge_name ?? ''}
                  </Text>
                )}
                {getSelectedStore?.incharge_phone && (
                  <Text style={styles.storeDetailInfo}>
                    <Text style={styles.storeDetailTitle}>Contact Number:</Text>
                    {'\n'}
                    {getSelectedStore?.incharge_phone ?? ''}
                  </Text>
                )}
                {getSelectedStore?.timing && (
                  <Text style={styles.storeDetailInfo}>
                    <Text style={styles.storeDetailTitle}>Store Timing:</Text>
                    {'\n'}
                    {getSelectedStore?.timing ?? ''}
                  </Text>
                )}
                <Text style={styles.storeDetailInfo}>
                  <Text style={styles.storeDetailTitle}>
                    Store Information:
                  </Text>
                  {'\n'}
                  {getSelectedStore?.name ?? ''}, {getSelectedStore?.address}
                </Text>
              </View>
            )}
            <View style={styles.controlBtnView}>
              {stores.length > 0 && (
                <TouchableOpacity
                  style={styles.getDirectionBtn}
                  onPress={goToViewOnMap}>
                  <Text style={styles.getDirectionBtnText}>View on Map</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.getDirectionBtn}
                onPress={() => getDirectionHandler()}>
                <Text style={styles.getDirectionBtnText}>Get Direction</Text>
              </TouchableOpacity>
            </View>
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
    marginLeft: 8,
  },
  getDirectionBtnText: {
    color: 'white',
  },
  subTitle: {
    fontSize: 20,
    color: '#81BB50',
    marginLeft: 8,
  },
  storeDetail: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeDetailTitle: {
    textAlign: 'center',
    color: '#F48423',
    fontSize: 18,
    fontWeight: 'bold',
  },
  storeDetailInfo: {
    marginTop: 8,
    textAlign: 'center',
    color: 'gray',
    fontSize: 18,
  },
  controlBtnView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FilterStoreScreen;
