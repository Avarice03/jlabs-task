import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Main from '../screens/Main';
import SubCategory from '../screens/SubCategory';

const Stack = createNativeStackNavigator();
const ProductsNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false, presentation: 'card'}}>
    <Stack.Screen name="Products" component={Main} />
    <Stack.Screen name="SubCategory" component={SubCategory} />
  </Stack.Navigator>
);

export default ProductsNavigator;
