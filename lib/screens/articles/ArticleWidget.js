import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import HTML from 'react-native-render-html'; 

const BlogPostWidget = ({ postId, title, excerpt }) => {
  const contentWidth = Dimensions.get('window').width; 

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePostClick(postId)}>
      <HTML source={{ html: `<p>${title}</p>` }} contentWidth={contentWidth} tagsStyles={tagsStyles} />
      <HTML source={{ html: excerpt }} contentWidth={contentWidth} />
    </TouchableOpacity>
  );
};

const handlePostClick = (postId) => {
  // implement navigation logic 
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
});

const tagsStyles = {
  p: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 0,
  },
};


export default BlogPostWidget;
