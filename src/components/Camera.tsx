import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {
  View,
  Button,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

export const CameraComponent = ({
  cameraOpen,
  setCameraOpen,
}: {
  cameraOpen: boolean;
  setCameraOpen: (state: boolean) => void;
}) => {
  const [cameraPermissions, setCameraPermissions] = useState<boolean>(false);
  const [imageSource, setImageSource] = useState('');
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back');

  const handleCameraPermissions = async () => {
    const res = await check(PERMISSIONS.ANDROID.CAMERA);

    if (res === RESULTS.GRANTED) {
      setCameraPermissions(true);
    } else if (res === RESULTS.DENIED) {
      const requestCamera = await request(PERMISSIONS.ANDROID.CAMERA);
      requestCamera === RESULTS.GRANTED
        ? setCameraPermissions(true)
        : setCameraPermissions(false);
    }
  };

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      // setShowCamera(false);
      console.log(photo.path);
      setCameraOpen(false);
    }
  };

  useEffect(() => {
    handleCameraPermissions();
  }, []);

  return (
    cameraOpen &&
    device && (
      <View style={styles.cameraContainer}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          video={true}
          audio={true}
          ref={camera}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.camButton}
            onPress={() => capturePhoto()}
          />
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
  },
  cameraContainer: {
    zIndex: 22,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
});
