import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const GeolocationComponent = () => {
  const [geolocationPermissions, setGeolocationPermissions] = useState(false);
  const [lat, setLat] = useState<number>();
  const [lon, setLon] = useState<number>();

  const handleGeolocationPermissions = async () => {
    const res = await check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION);
    console.log(res);

    if (res === RESULTS.GRANTED) {
      setGeolocationPermissions(true);
    } else if (res === RESULTS.DENIED) {
      const requestCamera = await request(
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log(requestCamera, 'ReqCamera');
      requestCamera === RESULTS.GRANTED
        ? setGeolocationPermissions(true)
        : setGeolocationPermissions(false);
    }
  };

  const getLocation = () => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'always'
    });
    Geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude);
        setLon(position.coords.longitude)
        setLat(position.coords.latitude)
        //setLocation(position.coords.latitude);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    handleGeolocationPermissions();
  }, []);

  return (
    <View style={{ padding: 10 }}>
      {geolocationPermissions && (
        <>
          <Text style={styles.text}>Geolocation: {lat} {lon}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={getLocation}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Get Geolocation</Text>
          </TouchableOpacity>
        </>
      )}
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
