import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
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
  // Mock forum topics data
  const [forumTopics, setForumTopics] = useState([
    { id: 1, title: 'The Latest Research on Celiac Disease: Updates and Insights', lastCommentDate: new Date(2023, 11, 10) },
    { id: 2, title: 'Top 10 Gluten-Free Snacks for Busy Days', lastCommentDate: new Date(2023, 10, 5) },
    { id: 3, title: 'Best Gluten-Free Restaurants in Toronto: 2023 Edition', lastCommentDate: new Date(2023, 11, 5) },
    { id: 4, title: 'Navigating Social Events with Celiac Disease: Tips and Tricks', lastCommentDate: new Date(2023, 10, 7) },
    { id: 5, title: 'Gluten-Free Recipe Exchange', lastCommentDate: new Date(2023, 10, 8) },
    { id: 6, title: 'Finding the Right Gluten-Free Resources: Books, Websites, and Apps', lastCommentDate: new Date(2023, 10, 10) },
    { id: 7, title: 'Traveling with Celiac Disease: How to Stay Gluten-Free on the Road', lastCommentDate: new Date(2023, 10, 5) },
    { id: 8, title: 'Understanding Cross-Contamination: How to Keep Your Kitchen Safe', lastCommentDate: new Date(2023, 6, 5) },
    { id: 9, title: 'Traveling with Celiac Disease: How to Stay Gluten-Free on the Road', lastCommentDate: new Date(2023, 1, 5) },
    { id: 10, title: 'Gluten-Free Kids: Support and Ideas for Parents', lastCommentDate: new Date(2023, 2, 5) },
    { id: 11, title: 'Gluten-Free Grocery Shopping: Finding the Best Products and Deals', lastCommentDate: new Date(2023, 2, 5) },
  ]);

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
