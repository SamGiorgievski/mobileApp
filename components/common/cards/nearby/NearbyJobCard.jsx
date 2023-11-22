import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ guide, handleNavigate }) => {

  const icon = guide.img
  ? require('./alcohol.jpeg')
  : require('./alcohol.jpeg');

  return (
    <TouchableOpacity 
    style={styles.container} 
    onPress={handleNavigate}
    >

      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={icon}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {guide.name}
        </Text>

        <Text style={styles.jobType}>
          {guide.message}
          </Text>

      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;