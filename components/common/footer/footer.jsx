import { View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

export default function Footer() {
  return (
    <View style={{
      position: "absolute",
      alignItems: "center",
      bottom: 0
    }}>
      <View style ={{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: '100%',
        justifyContent: 'space-evenly'
      }}>
        <Pressable style={{
          padding: 14
        }} android_ripple={{
          borderless: true,
          radius:50
        }}>
        <Icon name="map-symbol" height="26" width="26" color='#000000' />
        </Pressable>

        <Pressable style={{
          padding: 14
        }} android_ripple={{
          borderless: true,
          radius:50
        }}>
        <Icon name="camera" height="26" width="26" color='#000000' />
        </Pressable>

        <Pressable style={{
          padding: 14
        }} android_ripple={{
          borderless: true,
          radius:50
        }}>
        <Icon name="man-walking-directions-button" height="26" width="26" color='#000000' />
        </Pressable>

      </View>
    </View>
  )
}
