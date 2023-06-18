import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import colors from '../config/colors';
import AppText from './AppText';

const MainCategoryCard = ({title, image}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        <AppText style={{fontSize: 24, color: colors.black, fontWeight: '700'}}>
          {title}
        </AppText>
      </View>
    </View>
  );
};

export default MainCategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
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
