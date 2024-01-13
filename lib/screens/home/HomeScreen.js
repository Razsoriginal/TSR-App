import React from 'react'
import { View } from 'react-native';
import ArticleHome from '../articles/home/ArticleHome';
import ArticlePage from '../articles/post/ArticlePage';

const HomeScreen = () => {
  return (
    <View  style={{ flex: 1, backgroundColor: 'white' }}>
      <ArticleHome />
    </View>
  );
};

export default HomeScreen;
