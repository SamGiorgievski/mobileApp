import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {
  Header
} from "../../components";

export default function services() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{
        fontSize: 30
      }}>
      </Text>
      <Header />
      <Text>services page</Text>

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