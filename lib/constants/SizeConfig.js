import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Get the proportionate height as per screen size
const getProportionateScreenHeight = (inputHeight) => {
  // 812 is the layout height that the designer used in Flutter
  return (inputHeight / 812.0) * screenHeight;
};

// Get the proportionate width as per screen size
const getProportionateScreenWidth = (inputWidth) => {
  // 375 is the layout width that the designer used in Flutter
  return (inputWidth / 375.0) * screenWidth;
};

export {
  screenWidth,
  screenHeight,
  getProportionateScreenHeight,
  getProportionateScreenWidth,
};
