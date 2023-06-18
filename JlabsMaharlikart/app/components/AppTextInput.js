import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/colors';

const AppTextInput = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={30} style={styles.icon} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: colors.grey,
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto-Regular' : 'Avenir',
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
});
