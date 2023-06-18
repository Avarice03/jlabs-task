/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Welcome from './app/screens/Welcome';
import {CategoryProvider} from './app/providers/CategoryProvider';
import {NavigationContainer} from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import {HistoryProvider} from './app/providers/HistoryProvider';

export default function App() {
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <CategoryProvider>
          <HistoryProvider>
            <AppNavigator />
          </HistoryProvider>
        </CategoryProvider>
      </NavigationContainer>
    </>
  );
}
