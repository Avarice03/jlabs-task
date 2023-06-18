import {StyleSheet, Text, Platform} from 'react-native';
import React from 'react';

import colors from '../config/colors';

const AppText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto-Regular' : 'Avenir',
  },
});
