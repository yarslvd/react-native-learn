import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {useState} from 'react';
import WebView from 'react-native-webview';

import {ReactSvg} from './src/components/ReactSvg.tsx';
import {TextMask} from './src/components/TextMask.tsx';
import {CameraComponent} from './src/components/Camera.tsx';
import {Storage} from './src/components/Storage.tsx';
import {BottomSheetComponent} from './src/components/BottomSheet.tsx';
import {Counter} from './src/components/Counter.tsx';
import {DeviceInfoComponent} from './src/components/DeviceInfo.tsx';
import {GeolocationComponent} from './src/components/GeolocationComponent.tsx';

function App(): React.JSX.Element {
  const [cameraOpen, setCameraOpen] = useState<boolean>(false);

  const handleFlashMessage = () => {
    showMessage({
      message: 'Testing library successful',
      type: 'success',
    });
  };

  const handleCameraOpen = () => {
    setCameraOpen(prev => !prev);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, position: 'relative'}}>
        {cameraOpen && (
          <CameraComponent
            cameraOpen={cameraOpen}
            setCameraOpen={setCameraOpen}
          />
        )}
        <LinearGradient
          colors={['#8360c3', '#2ebf91']}
          style={styles.gradient}
          useAngle={true}
          angle={45}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, position: 'absolute'}}>
            {/* <Storage /> */}
            <WebView source={{uri: 'https://reactnative.dev/'}} style={{ height: 600 }} />
            <ReactSvg />
            <ReactSvg />
            <ReactSvg />
            <ReactSvg />
            <ReactSvg />
            <ReactSvg />
            <TextMask />
            {/* <Button
              onPress={handleFlashMessage}
              title="Test Flash Message"
              color="#841584"
            /> */}
            <Button onPress={handleCameraOpen} title="Open Camera" />
            <Counter />
            <DeviceInfoComponent />
            <GeolocationComponent />
          </ScrollView>
        </LinearGradient>
      </View>
      {/* <BottomSheetComponent /> */}
      <FlashMessage position="top" />
    </SafeAreaView>
  );
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
    position: 'relative',
  },
});

export default App;
