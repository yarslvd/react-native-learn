import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {addEventListener, fetch} from '@react-native-community/netinfo';

export const DeviceInfoComponent = () => {
  const [androidId, setAndroidId] = useState('');
  const [deviceBrand, setDeviceBrand] = useState('');
  const [baseOS, setBaseOs] = useState('');
  const [netInfo, setNetInfo] = useState('');

  const getAndroidId = () => {
    DeviceInfo.getAndroidId().then(res => {
      setAndroidId(res);
    });
  };

  const getDeviceBrand = () => {
    setDeviceBrand(DeviceInfo.getBrand());
  };

  const getBaseOS = () => {
    DeviceInfo.getBaseOs().then(res => {
      console.log(res);
      setBaseOs(res);
    });
  };

  const getNetInfo = () => {
    fetch().then(state => {
      setNetInfo(String(state.isConnected));
    });
  };

  useEffect(() => {
    getAndroidId();
    getDeviceBrand();
    getBaseOS();

    const unsubscribe = addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{padding: 10}}>
      <Text style={styles.text}>Android ID: {androidId}</Text>
      <Text style={styles.text}>Device: {deviceBrand.toLocaleUpperCase()}</Text>
      <Text style={styles.text}>OS: {baseOS}</Text>
      <Text style={styles.text}>Net Info: {netInfo}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={getNetInfo}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Check NetInfo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
