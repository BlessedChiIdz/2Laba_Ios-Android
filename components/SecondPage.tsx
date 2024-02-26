import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';

const SecondPage = () => {
  return (
    <View style={[styles2.container, {backgroundColor: '#673ab7'}]}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles2.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  containerForT: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black',
  },
});
export default SecondPage;
