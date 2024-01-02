import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getProportionateScreenWidth } from '../constants/SizeConfig';
import { fSecondaryColor } from '../constants/colors';

const SearchField = ({ textHint }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={getProportionateScreenWidth(20)} color="gray" style={styles.searchIcon} />
      <TextInput
        placeholder={textHint}
        style={styles.searchInput}
        // implement logic - idea is to navigate to a diffreent page and call the api with the input text
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: getProportionateScreenWidth(335),
    height: 45,
    backgroundColor: fSecondaryColor + '20',
    borderRadius: getProportionateScreenWidth(10),
    paddingHorizontal: getProportionateScreenWidth(16),
  },
  searchIcon: {
    marginRight: getProportionateScreenWidth(10),
  },
  searchInput: {
    flex: 1,
    fontSize: getProportionateScreenWidth(14),
  },
});

export default SearchField;
