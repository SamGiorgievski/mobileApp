import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {

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

  const router = useRouter();

  return (
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
              key={`nearby-job-${guide.id}`}
              handleNavigate={() => router.push(`/job-details/${guide.id}`)}
            />
          ))}

      </View>
    </View>
  );
};


export default Nearbyjobs