import {StyleSheet, FlatList, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import MainCategoryCard from '../components/MainCategoryCard';
import Screen from '../components/Screen';
import ListSeparator from '../components/ListSeparator';
import AppTextInput from '../components/AppTextInput';
import routes from '../navigation/routes';
import {CategoryContext} from '../providers/CategoryProvider';
import {HistoryContext} from '../providers/HistoryProvider';

// Main products page for Maharlikart
const Main = ({navigation}) => {
  const [categories] = useContext(CategoryContext);
  const [history, setHistory] = useContext(HistoryContext);
  const [searchWord, setSearchWord] = useState('');

  if (!categories || categories.length === 0) {
    return null;
  }

  const handleSearchSubmit = () => {
    const currentDate = new Date();

    // Get the date
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const date = `${year}-${month}-${day}`;

    // Get the time
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    const historyItem = {name: searchWord, date: date, time: time};

    navigation.navigate(routes.SEARCH_ITEM, searchWord);
    setHistory([...history, historyItem]);
    setSearchWord('');
  };

  return (
    <Screen style={styles.screen}>
      <AppTextInput
        placeholder="Find something you like"
        icon="search"
        value={searchWord}
        onChangeText={text => setSearchWord(text)}
        maxLength={33}
        onSubmitEditing={handleSearchSubmit}
      />
      <FlatList
        data={categories}
        keyExtractor={category => category.id.toString()}
        renderItem={({item}) => (
          <MainCategoryCard
            title={item.name}
            image={item.image}
            onPress={() => navigation.navigate(routes.SUB_CATEGORY, item)}
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
