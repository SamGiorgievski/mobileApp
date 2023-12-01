import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../../constants';
import {
  Guides,
  ScreenHeaderBtn,
  Welcome,
  Header
} from "../../components";

export default function camera() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{
        fontSize: 30
      }}>
      </Text>
        <Header />  

      <Text>more</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eafaf8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});