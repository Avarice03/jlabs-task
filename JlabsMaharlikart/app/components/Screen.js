import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import colors from '../config/colors';
const Screen = ({children}) => {
  return <SafeAreaView style={[styles.screen]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.neutral,
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
});
