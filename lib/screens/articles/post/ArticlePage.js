import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { fImageHeader } from '../../../constants/constants';

const ArticlePage = ({ route }) => {
  const { postId } = route.params; 

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: fImageHeader }} style={styles.backgroundImage}>
      {/* Add your children here */}
        <Text>Article Page</Text>
      </ImageBackground>
      
      <Text>Post ID: {postId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
   // flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});



export default ArticlePage;
