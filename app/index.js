import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SIZES } from '../constants';
import {
  HomePage,
  Header,
  Footer
} from "../components";
import styles from './index.style'


export default function App() {

const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ 
        fontSize: 30 }}>
        </Text>

        <Header />  

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}>
            <HomePage />
          </View>
        </ScrollView>
  
    <Footer />

      </SafeAreaView>
  );
}