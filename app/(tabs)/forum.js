import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants';
import forumPlaceholderData from '../../api/forum';
import {
  Header
} from "../../components";

export default function forum() {

  const router = useRouter();
  // Mock forum topics data
  const [forumTopics, setForumTopics] = useState(forumPlaceholderData);

  // Sort topics by most recent comment
  const sortedTopics = forumTopics.sort((a, b) => b.lastCommentDate - a.lastCommentDate);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Topics</Text>
        </View>
        <ScrollView style={styles.topicList}>
          {sortedTopics.map(topic => (
            <TouchableOpacity
              key={topic.id}
              style={styles.topicItem}
              onPress={() => router.navigate('/topic-detail', { topic })}
            >
              <Text style={styles.topicTitle}>{topic.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer content here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.celiapp,
    color: COLORS.primary,
  },
  header: {
    height: 60,
    backgroundColor: COLORS.celiapp,
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.primary,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  topicList: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    // Add more styling for the topic list here
  },
  topicListText: {
    color: COLORS.primary,
  },
  footer: {
    height: 50,
    backgroundColor: COLORS.celiapp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: COLORS.primary,
  },
  topicItem: {
    backgroundColor: COLORS.white,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2, // for Android
  },
  topicTitle: {
    color: COLORS.darkGray,
    fontSize: 16,
    fontWeight: '500', // Medium-bold font weight
  },
});
