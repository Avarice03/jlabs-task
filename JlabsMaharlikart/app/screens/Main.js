import {StyleSheet, FlatList, View, TextInput, Text} from 'react-native';
import React, {useContext, useState} from 'react';

import colors from '../config/colors';
import MainCategoryCard from '../components/MainCategoryCard';
import {CategoryContext} from '../providers/CategoryProvider';
import Screen from '../components/Screen';
import ListSeparator from '../components/ListSeparator';
import AppTextInput from '../components/AppTextInput';

const Main = ({navigation}) => {
  const [categories] = useContext(CategoryContext);
  const [searchWord, setSearchWord] = useState('');

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <Screen style={styles.screen}>
      <AppTextInput
        placeholder="Find something you like"
        icon="search"
        onChangeText={text => setSearchWord(text)}
        maxLength={33}
      />
      <FlatList
        data={categories}
        keyExtractor={category => category.id.toString()}
        renderItem={({item}) => (
          <MainCategoryCard
            title={item.name}
            image={item.image}
            onPress={() => navigation.navigate('SubCategory', item)}
          />
        )}
        ItemSeparatorComponent={() => <ListSeparator />}
      />
    </Screen>
  );
};

export default Main;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
