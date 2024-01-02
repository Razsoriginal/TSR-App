import React from 'react';
import { Text, View } from 'react-native';
import { getProportionateScreenWidth } from '../constants/SizeConfig';

const SectionTitle = ({ title }) => {
  return (
    <View style={{ marginTop: 15, paddingHorizontal: '5%' }}>
      <Text style={headingStyle}>{title}</Text>
    </View>
  );
};

const headingStyle = {
  fontSize: getProportionateScreenWidth(28),
  fontWeight: 'bold',
  color: 'black',
};

export default SectionTitle;
