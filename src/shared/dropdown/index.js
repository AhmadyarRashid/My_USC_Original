import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

function Dropdown({isLoading, data, onSelect, defaultButtonText}) {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SelectDropdown
          data={data}
          defaultButtonText={defaultButtonText}
          onSelect={(selectedItem, index) => {
            onSelect(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  buttonStyle: {
    width: '80%',
    backgroundColor: '#81BB50',
    borderRadius: 18,
  },
  buttonTextStyle: {
    color: 'white',
  },
});

export default Dropdown;
