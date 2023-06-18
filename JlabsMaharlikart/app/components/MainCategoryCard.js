import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import colors from '../config/colors';
import AppText from './AppText';

const MainCategoryCard = ({title, image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.content}>
          <AppText
            style={{fontSize: 24, color: colors.black, fontWeight: '700'}}>
            {title}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MainCategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
    position: 'absolute',
  },
});
