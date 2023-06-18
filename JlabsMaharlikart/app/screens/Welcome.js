import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import colors from '../config/colors';

const Welcome = () => {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/maharlikart.png')}
        />
        <Text style={styles.logoText}>
          maharli<Text style={styles.highlight}>kart</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    color: colors.white,
    fontSize: 40,
    fontFamily: 'Quicksand-Bold',
  },
  highlight: {
    color: 'gold',
  },
});

export default Welcome;
