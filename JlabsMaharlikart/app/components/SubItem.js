import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AppText from './AppText';

import colors from '../config/colors';

const SubItem = ({subCategories}) => {
  return (
    <View style={styles.subItemContainer}>
      {subCategories.map(item => (
        <View style={styles.subItem}>
          <AppText style={styles.title}>{item.name}</AppText>
          <Image
            style={styles.image}
            source={
              item.image === null
                ? require('../assets/placeholder.jpg')
                : {uri: item.image}
            }
          />
        </View>
      ))}
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
    color: colors.black,
    position: 'absolute',
    zIndex: 5,
    padding: 5,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 170,
    marginRight: '5%',
  },
});
