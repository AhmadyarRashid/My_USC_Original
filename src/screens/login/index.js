import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';

const serverUrl = 'https://fm.uscpak.com/api/v1';

function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = useCallback(() => {
    if (!username) {
      alert('Please enter username.');
      return;
    }
    if (!password) {
      alert('Please enter password.');
      return;
    }
    axios
      .post(`${serverUrl}/myapp/login`, {
        params: {
          login: username,
          password,
        },
      })
      .then(response => {
        if (response?.data?.result) {
          navigation.reset({
            index: 0,
            routes: [{name: 'dashboard'}],
          });
        } else {
          alert('Wrong Username and password.');
        }
      })
      .catch(error => alert('Wrong Username and password.'));
  }, [navigation, password, username]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.container}
        source={require('./../../assets/background.png')}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.guide}>
            Please enter your login and password!
          </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Email / Username"
            onChangeText={setUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
            value={password}
          />
          <TouchableOpacity style={styles.btn} onPress={onSubmitHandler}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    marginTop: '25%',
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
  guide: {
    color: '#017D03',
    fontWeight: 100,
    fontSize: 14,
  },
  main: {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: '#81BB50',
    borderRadius: 18,
    textAlign: 'center',
    marginTop: 18,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginTop: '8%',
    backgroundColor: '#81BB50',
    paddingVertical: 15,
    width: '70%',
    borderRadius: 22,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
