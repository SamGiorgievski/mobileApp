import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./GuideCard.style";

const GuideCard = ({ guide, handleNavigate }) => {


  return (
    <TouchableOpacity 
    style={styles.container} 
    onPress={handleNavigate}
    >

      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={guide.img}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {guide.title}
        </Text>

        <Text style={styles.jobType}>
          {guide.message}
          </Text>

      </View>
    </TouchableOpacity>
  );
};

export default GuideCard;