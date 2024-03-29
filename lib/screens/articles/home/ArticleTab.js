import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CustomTabBar from '../../../components/Tabbar';
import ArticleListWidget from './ArticleList';
import HTML from 'react-native-render-html';

const ArticleTab = () => {
  const [categories, setCategories] = useState([]);
  const contentWidth = Dimensions.get('window').width;

  useEffect(() => {
    let retryCount = 3;
    const delay = 5000;

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://thestrongrope.com/wp-json/wp/v2/categories');
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (error) {
        if (retryCount > 0) {
          // Retry after a delay
          setTimeout(() => {
            retryCount--;
            fetchCategories();
          }, delay);
        }
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) => category.count > 0);

  return (
    <View style={styles.container}>
      {filteredCategories.length > 0 && (
        <CustomTabBar
          title={[
            'All',
            ...filteredCategories.map((category) => (
              <HTML key={category.id} source={{ html: category.name }} contentWidth={contentWidth} />
            )),
          ]}
          page={[
            <ArticleListWidget key={0} categoryId={null} />, // All posts (categoryId null)
            ...filteredCategories.map((category) => (
              <ArticleListWidget key={category.id} categoryId={category.id} />
            )),
          ]}
          initialTabTitle="All"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ArticleTab;
