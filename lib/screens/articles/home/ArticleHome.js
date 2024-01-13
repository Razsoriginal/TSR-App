import React from 'react';
import { ScrollView, Text } from 'react-native'
import { SafeAreaView, View } from 'react-native-safe-area-context';
import HomeHeader from '../../../components/HomeHeader';
import ArticleTab from './ArticleTab';

const ArticleHome = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <HomeHeader title="Articles" />
      <ArticleTab />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleHome;


