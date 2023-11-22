import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const guideTypes = ["Guides", "Services", "Recipes"];

const Welcome = ( { searchTerm, setSearchTerm, handleClick }) => {

  const router = useRouter();
  const [activeGuideType, setActiveGuideType] = useState("Guides");



  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Sam!</Text>
        <Text style={styles.welcomeMessage}>What do you need help with?</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={guideTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeGuideType, item)}
              onPress={() => {
                setActiveGuideType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeGuideType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>

      <View>

        <Text></Text>

      </View>

    </View>
  )
}

export default Welcome