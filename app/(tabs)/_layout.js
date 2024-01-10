import * as SplashScreen from "expo-splash-screen";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

SplashScreen.preventAutoHideAsync();

function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Layout = () => {

  return (

    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>

            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: 'services',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,

        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => <TabBarIcon name="barcode" color={color} />,
        }}
      />


      <Tabs.Screen
        name="forum"
        options={{
          title: 'forum',
          tabBarIcon: ({ color }) => <TabBarIcon name="comments-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'more',
          tabBarIcon: ({ color }) => <TabBarIcon name="forward" color={color} />,
        }}
      />
    </Tabs>
  )
};

export default Layout;