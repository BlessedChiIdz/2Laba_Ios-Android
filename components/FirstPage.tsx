import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const FirstPage = () => {
  return (
    <View style={[styles2.container, {backgroundColor: '#673ab7'}]}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.stretch}
      />
      <Text>qwe</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
export default FirstPage;
