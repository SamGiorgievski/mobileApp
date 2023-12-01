import React from 'react'
import { Stack } from 'expo-router';
import { icons, images } from '../../../constants';
import ScreenHeaderBtn from "./buttons/ScreenHeaderBtn.jsx";


export default function Header() {
  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "white" },
        headerShadowVisible: true,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
        ),
        headerTitle: "Celiapp",
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'black', // Set the color of the header title to black
          fontSize: 20, // Adjust the font size if needed
          fontWeight: 'bold', // You can also set the font weight
        },
      }}
    />
  )
}
