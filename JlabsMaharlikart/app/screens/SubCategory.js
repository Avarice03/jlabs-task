import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppText from '../components/AppText';

import colors from '../config/colors';
import SubItem from '../components/SubItem';
import AppTextInput from '../components/AppTextInput';

const SubCategory = ({route}) => {
  const [searchWord, setSearchWord] = useState('');
  const subCategory = route.params;

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
          placeholder="Find something you like"
          icon="search"
          onChangeText={text => setSearchWord(text)}
          maxLength={33}
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
