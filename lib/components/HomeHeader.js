import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchField from './SearchBar';
import { getProportionateScreenHeight, getProportionateScreenWidth } from '../constants/SizeConfig';

const HomeHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.searchFieldContainer}>
        <SearchField textHint={`Search ${title}`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  searchFieldContainer: {
    marginTop: getProportionateScreenHeight(20),
  },
});

export default HomeHeader;
