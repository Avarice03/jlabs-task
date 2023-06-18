import {StyleSheet, ScrollView, View} from 'react-native';
import React, {useContext} from 'react';

import colors from '../config/colors';
import MainCategoryCard from '../components/MainCategoryCard';
import {CategoryContext} from '../providers/CategoryProvider';

const Main = () => {
  const [categories] = useContext(CategoryContext);

  if (!categories || categories.length === 0) {
    return null;
  }

  console.log(categories);
  return (
    <ScrollView style={styles.background}>
      {categories.map(category => (
        <MainCategoryCard
          key={category.id}
          title={category.name}
          image={category.image}
        />
      ))}
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.neutral,
    flex: 1,
    padding: 20,
    paddingTop: 70,
  },
});
