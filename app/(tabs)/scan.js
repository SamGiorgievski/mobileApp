import { StyleSheet, Text, View, ScrollView, SafeAreaView, useWindowDimensions,  TouchableOpacity, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useRef, useEffect } from 'react';
import { shareAsync } from 'expo-sharing';
import { Stack, useRouter } from 'expo-router';
import { Camera, CameraType,  } from 'expo-camera';
import { COLORS, icons, images, SIZES } from '../../constants';
import {
  Guides,
  ScreenHeaderBtn,
  Welcome,
  Header
} from "../../components";
import * as MediaLibrary from 'expo-media-library';
import { useIsFocused } from '@react-navigation/native';

export default function camera() {
  let cameraRef = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const isFocused = useIsFocused()

  // Camera ratio
  const {width} = useWindowDimensions();
  const height = Math.round((width * 16) / 9);


  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      requestPermission(permission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();

    return () => {

      // Additional cleanup if needed
    };
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return (<View />);
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



  // Test

  if (permission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!permission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
        console.log(photo)
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>

        
        <Image style={styles.preview} source={{ uri: `data:image/jpg;base64,${photo.base64}` }} />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <View>
      { isFocused &&
      <Camera style={{
        height: height,
        width: "100%"}} 
        ref={cameraRef}
        ratio="16:9">
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Take Pic" onPress={takePic} />
        </View>
        <StatusBar style="auto" />
      </Camera>
}
    </View>
  );






  // return (
  //   <View style={styles.container}>
  //     <Camera style={{
  //       height: height,
  //       width: "100%",
  //     }} type={type} ratio="16:9">
  //       <View style={styles.buttonContainer}>
  //         <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
  //           <Text style={styles.text}>Flip Camera</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </Camera>
  //   </View>
  // );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    margin: 64,
    justifyContent: 'flex-end'
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});