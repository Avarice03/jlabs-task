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
import AppText from './app/components/AppText';
import Main from './app/screens/Main';
import {CategoryProvider} from './app/providers/CategoryProvider';
import SubCategory from './app/screens/SubCategory';

export default function App() {
  return (
    <>
      {/* <Welcome /> */}
      <CategoryProvider>
        {/* <Main /> */}
        <SubCategory />
      </CategoryProvider>
    </>
  );
}
