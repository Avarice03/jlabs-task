import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProductsNavigator from './ProductsNavigator';
import History from '../screens/History';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const ApppNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Products"
      component={ProductsNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="cart-variant" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="History"
      component={History}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="history" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default ApppNavigator;
