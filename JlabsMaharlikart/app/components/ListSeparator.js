import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

export default ListSeparator;

const styles = StyleSheet.create({
  itemSeparator: {
    width: 100,
    height: 15,
  },
});
