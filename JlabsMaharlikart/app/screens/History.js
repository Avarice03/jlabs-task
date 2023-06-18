import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

import routes from '../navigation/routes';
import colors from '../config/colors';
import {HistoryContext} from '../providers/HistoryProvider';
import ListSeparator from '../components/ListSeparator';

const History = ({navigation}) => {
  const [history] = useContext(HistoryContext);
  if (!history) {
    return null;
  }

  return (
    <Screen>
      <AppText style={styles.title}>Search History</AppText>
      <View style={styles.historyContainer}>
        <FlatList
          data={history}
          keyExtractor={item => item.name.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View style={{marginRight: 20}}>
                <AppText style={{fontSize: 14}}>{item.date}</AppText>
                <AppText style={{fontSize: 14}}>{item.time}</AppText>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.SEARCH_ITEM, item.name)
                }>
                <AppText style={styles.itemName}>{item.name}</AppText>
              </TouchableOpacity>
            </View>
          )}
          ItemSeparatorComponent={() => <ListSeparator />}
        />
      </View>
    </Screen>
  );
};

export default History;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: 30,
  },
  historyContainer: {},
  item: {
    flexDirection: 'row',
  },
  itemName: {
    color: colors.black,
    textDecorationLine: 'underline',
  },
});
