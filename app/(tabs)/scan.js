import { StyleSheet, Text, View, ScrollView, SafeAreaView, useWindowDimensions,  TouchableOpacity, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Camera, CameraType,  } from 'expo-camera';
import { COLORS, icons, images, SIZES } from '../../constants';
import {
  Guides,
  ScreenHeaderBtn,
  Welcome,
  Header
} from "../../components";

export default function camera() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const {width} = useWindowDimensions();
  const height = Math.round((width * 16) / 9);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={{
        height: height,
        width: "100%",
      }} type={type} ratio="16:9">
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});