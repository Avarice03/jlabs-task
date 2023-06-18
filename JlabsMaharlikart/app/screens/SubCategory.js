import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import AppText from '../components/AppText';

import colors from '../config/colors';
import SubItem from '../components/SubItem';

const SubCategory = () => {
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: 'https://maharlikart-prod.s3.ap-southeast-1.amazonaws.com/category/standard/categ-asianmarket.jpg',
        }}
      />
      <View style={styles.subCategoryContainer}>
        <AppText style={styles.title}>Asian Mart</AppText>
        <AppText style={styles.description}>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent porta pellentesque elit pulvinar iaculis. Lorem ipsum dolor
          sit amet, consectetur.
        </AppText>
        <AppText style={styles.subtitle}>Products</AppText>
        <View>
          <SubItem
            title="Asian Instant Noodles"
            image={require('../assets/placeholder.jpg')}
          />
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
    marginTop: 50,
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
