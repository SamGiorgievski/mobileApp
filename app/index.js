import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {

const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ 
        fontSize: 30 }}>
          Celiapp
          </Text>

          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.lightWhite},
              headerShadowVisible: false,
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
              ),
              headerTitle: "header",
            }}
            />

      <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flex: 1,
                  padding: SIZES.medium,
                }}
              >
                <Welcome />
                <Popularjobs />
                <Nearbyjobs />
              </View>
            </ScrollView>
          
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff8f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});