import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import AppText from '../components/AppText';
import routes from '../navigation/routes';
import colors from '../config/colors';
import SubItem from '../components/SubItem';
import AppTextInput from '../components/AppTextInput';
import {HistoryContext} from '../providers/HistoryProvider';

// Sub category products page for Maharlikart
const SubCategory = ({route, navigation}) => {
  const [searchWord, setSearchWord] = useState('');
  const [history, setHistory] = useContext(HistoryContext);
  const subCategory = route.params;

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
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: subCategory.image,
        }}
      />
      <View style={styles.subCategoryContainer}>
        <AppTextInput
          placeholder={`Find something you like`}
          icon="search"
          value={searchWord}
          onChangeText={text => setSearchWord(text)}
          maxLength={33}
          onSubmitEditing={handleSearchSubmit}
        />
        <AppText style={styles.title}>{subCategory.name}</AppText>
        <AppText style={styles.description}>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent porta pellentesque elit pulvinar iaculis. Lorem ipsum dolor
          sit amet, consectetur.
        </AppText>
        <AppText style={styles.subtitle}>Products</AppText>
        <View>
          <SubItem subCategories={subCategory.sub_categories} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  subCategoryContainer: {
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: '700',
  },
  description: {
    fontSize: 18,
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
  },
  image: {
    width: '100%',
    height: 250,
  },
});
