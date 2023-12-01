import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import  MaterialCommunityIcons  from 
'react-native-vector-icons/MaterialCommunityIcons';



export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}