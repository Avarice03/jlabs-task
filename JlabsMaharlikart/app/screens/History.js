import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

import colors from '../config/colors';
const History = () => {
  return (
    <Screen>
      <AppText style={styles.title}>Search History</AppText>
    </Screen>
  );
};

export default History;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: colors.primary,
    fontWeight: '700',
  },
});
