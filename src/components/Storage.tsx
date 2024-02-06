import { View, Button, Text, StyleSheet } from "react-native"
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

export const Storage = () => {
  const [asyncStorageData, setAsyncStorageData] = useState<string>('');
  const [encryptedStorageData, setEncryptedStorageData] = useState<string>('');

  async function storeUserSession() {
    try {
      const obj: string = JSON.stringify({
        age: 20,
        token: 'ACCESS_TOKEN',
        username: 'yarslvd',
        languages: ['en', 'ua'],
      });
      const data = await EncryptedStorage.setItem('user_session', obj);
      return obj;
    } catch (error) {
      console.log(error);
    }
  }

  async function retrieveUserSession() {
    try {
      return await EncryptedStorage.getItem('user_session');
    } catch (error) {
      console.log(error);
    }
  }

  const setAsyncData = async (text: string) => {
    try {
      const value = await AsyncStorage.setItem('name', text);
      if (value !== null) {
        setAsyncStorageData(text);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAsyncData = async () => {
    try {
      return await AsyncStorage.getItem('name');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const checkAsyncStorage = async () => {
      const value: string | null | undefined = await getAsyncData();
      if (value) {
        await setAsyncData(value);
      } else {
        await setAsyncData('Hello');
      }
    };

    const checkEncryptedStorage = async () => {
      const value: string | null | undefined = await retrieveUserSession();
      const obj = value && JSON.parse(value);
      if (obj) {
        setEncryptedStorageData(obj.username);
      } else {
        const newVal = await storeUserSession();
        setEncryptedStorageData(newVal && JSON.parse(newVal).username);
      }
    };

    checkAsyncStorage();
    checkEncryptedStorage();
  }, []);
  return(
    <View>
                  <Button
              onPress={() => setAsyncData('YVES')}
              title="Update Async Storage"
            />
            <Text style={styles.quicksandBold}>
              Async Data:{asyncStorageData}
            </Text>
            <Text style={styles.quicksandBold}>
              Encrypted Data:{encryptedStorageData}
            </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  quicksandBold: {
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    fontSize: 30,
  },
  gradient: {
    width: '100%',
    flex: 1,
    position: 'relative'
  },
});