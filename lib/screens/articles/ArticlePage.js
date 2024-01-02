import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArticlePage = ({ route }) => {
  const { postId } = route.params; 

  return (
    <View style={styles.container}>
      <Text>Article Page</Text>
      <Text>Post ID: {postId}</Text>
      {/* Render the details of the specific blog post using the postId */}
      {/* For now, this page will display the post ID as a placeholder */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ArticlePage;
