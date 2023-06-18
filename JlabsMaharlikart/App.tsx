/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Welcome from './app/screens/Welcome';
import Main from './app/screens/Main';
import {CategoryProvider} from './app/providers/CategoryProvider';
import SubCategory from './app/screens/SubCategory';
import {NavigationContainer} from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <CategoryProvider>
          <AppNavigator />
        </CategoryProvider>
      </NavigationContainer>
    </>
  );
}
