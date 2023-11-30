import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "../../home/welcome/Welcome";
import Nearbyjobs from '../../home/nearby/Nearbyjobs';

import  MaterialCommunityIcons  from 
'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (

    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'black' }} 
activeColor="white" >
      <Tab.Screen name="Home" component={Welcome}            //Home Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Search" component={Nearbyjobs}      // Search Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26}/>
        )
    }}/>
    </Tab.Navigator>
  );
}