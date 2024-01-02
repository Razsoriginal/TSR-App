import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { getProportionateScreenHeight, getProportionateScreenWidth } from '../constants/SizeConfig';
import { fSecondaryColor, fPrimaryColor, fPrimaryLightColor, fTextColor } from '../constants/colors'

const CustomTabBar = ({ title, page, initialTabTitle = '' }) => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (initialTabTitle !== '') {
      const index = title.findIndex(
        (tab) => tab.toLowerCase() === initialTabTitle.toLowerCase()
      );
      setTabIndex(index !== -1 ? index : 0);
    }
  }, [initialTabTitle, title]);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Padding before the first tab */}
        <View style={{ paddingHorizontal: 10 }}></View>

        {title.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              {
                backgroundColor: index === tabIndex ? fPrimaryLightColor : fSecondaryColor + '15',
                // Using defined colors
              },
            ]}
            onPress={() => handleTabChange(index)}
          >
            <Text
              style={[
                styles.tabText,
                { color: index === tabIndex ? fPrimaryColor : fTextColor },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.tabContent}>
        {page.map((item, index) => (
          <View key={index} style={{ display: index === tabIndex ? 'flex' : 'none' }}>
            {item}
          </View>
        ))}
      </View>
    </View>
  );
};

// Adjusted styles using imported colors
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  tabText: {
    fontSize: 16,
  },
  tabContent: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
});

export default CustomTabBar;