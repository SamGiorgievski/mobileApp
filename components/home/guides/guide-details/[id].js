import { Stack, useRouter} from "expo-router";
import { useCallback, useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

import {
  ScreenHeaderBtn
} from "../../..";
import { COLORS, icons } from "../../../../constants";

const GuideDetails = () => {

  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >

            <Text> Alcohol!</Text>
        </ScrollView>
      </>
    </SafeAreaView>
  )
}

export default GuideDetails;