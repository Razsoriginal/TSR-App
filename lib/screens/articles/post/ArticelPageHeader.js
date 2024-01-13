import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, Modal, Pressable } from 'react-native';
import { fImageHeader } from '../../../constants/constants';
import { getProportionateScreenWidth } from '../../../constants/SizeConfig'; 
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

const ArticlePageHeader = ({ article }) => {
    const navigation = useNavigation();
    const [showPopupMenu, setShowPopupMenu] = useState(false);
  
    const handlePress = (value) => {
      switch (value) {
        case 'Share':
          // Logic for sharing article
          break;
        case 'Settings':
          navigation.navigate('AppSettings'); // Navigate to the settings screen
          break;
        default:
          break;
      }
      setShowPopupMenu(false);
    };
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: fImageHeader }} style={styles.image} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />{/* Use Ionicons for back button */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowPopupMenu(true)}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />{/* Use Ionicons for popup menu */}
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Dummy</Text>
        </View>
        {showPopupMenu && (
          <View style={styles.popupMenu}>
            <TouchableOpacity onPress={() => handlePress('Share')} style={styles.menuItem}>
              <Text>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Settings')} style={styles.menuItem}>
              <Text>Settings</Text>
            </TouchableOpacity>
            {/* Add other menu items as needed */}
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 200, // Update with your desired height
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    titleContainer: {
      paddingHorizontal: getProportionateScreenWidth(20),
      paddingBottom: getProportionateScreenWidth(20),
    },
    title: {
      fontSize: getProportionateScreenWidth(23),
    },
    popupMenu: {
      position: 'absolute',
      top: 50, // Adjust the top position based on your UI requirements
      right: 10, // Adjust the right position based on your UI requirements
      backgroundColor: 'white',
      borderRadius: 8,
      elevation: 5,
      padding: 10,
    },
    menuItem: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
  });
  
  export default ArticlePageHeader;