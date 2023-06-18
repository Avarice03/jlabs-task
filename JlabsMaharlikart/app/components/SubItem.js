import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AppText from './AppText';

import colors from '../config/colors';

const SubItem = ({title, image}) => {
  return (
    <View style={styles.subItemContainer}>
      <View style={styles.subItem}>
        <AppText style={styles.title}>{title}</AppText>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.subItem}>
        <AppText style={styles.title}>{title}</AppText>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.subItem}>
        <AppText style={styles.title}>{title}</AppText>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.subItem}>
        <AppText style={styles.title}>{title}</AppText>
        <Image style={styles.image} source={image} />
      </View>
    </View>
  );
};

export default SubItem;

const styles = StyleSheet.create({
  subItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  subItem: {
    width: '45%',
  },
  title: {
    fontSize: 16,
    color: colors.white,
    position: 'absolute',
    zIndex: 5,
    padding: 5,
  },
  image: {
    width: '100%',
    height: 170,
    marginRight: '5%',
  },
});
