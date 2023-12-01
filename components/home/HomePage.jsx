import React from "react";
import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, TextInput, Image,
  FlatList } from "react-native";
import styles from "./HomePage.style";
import NearbyJobCard from "../common/cards/GuideCard";
import { icons, SIZES } from "../../constants";

const HomePage = ( { searchTerm, setSearchTerm, handleClick } ) => {

  const guides =[
    {
      title: "Alcohol",
      id: 1,
      allowed: ["tequila", "rum", "wine", "cider"],
      not_allowed: ["whiskey", "scotch", "beer"],
      message: "Let's get drunk!",
      img: require("./alcohol.jpeg")
    },
    {
      title: "Sauces",
      id: 2,
      allowed: ["ketchup", "mustard", "mayonaise"],
      not_allowed: ["soy sauce", "fish sauce", "malt vinegar"],
      message: "Let's get saucy!",
      img: require("./sauce.jpeg")
    },
    {
      title: "Snacks",
      id: 3,
      allowed: ["popcorn", "chips", "licorice"],
      not_allowed: ["pretzels", "nuts", "crackers"],
      message: "Let's get snacky!",
      img: require("./snack.jpeg")
    }
  ] ;

  const guideTypes = ["Guides", "Services", "Recipes"];

  const router = useRouter();

  const [activeGuideType, setActiveGuideType] = useState("Guides");
  



  return (
    <>
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Guides</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>

        {guides.map((guide) => (
            <NearbyJobCard
              guide={guide}
              key={`guide-${guide.id}`}
              handleNavigate={() => router.push(`/guide-details/${guide.id}`)}
            />
          ))}

      </View>
    </View>
    </>
  );
};


export default HomePage