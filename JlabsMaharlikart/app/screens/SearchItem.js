import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import axios from 'axios';
import colors from '../config/colors';
import SubItem from '../components/SubItem';

// Searched Items page for Maharlikart
const SearchItem = ({route}) => {
  const item = route.params;
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `https://api.maharlikart.ph/v4.2/api/categories?keyword=${item}`,
        );
        setResults(response.data.data);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchItem();
  }, [item]);

  if (!results || results.length === 0) {
    return (
      <Screen>
        <AppText style={styles.title}>No results found</AppText>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <AppText style={styles.title}>{item}</AppText>
          {results.map(item => (
            <View key={item.id}>
              <AppText style={styles.subtitle}>{item.name}</AppText>
              <View>
                <SubItem subCategories={item.sub_categories} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 20,
    color: colors.secondary,
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 20,
  },
});
