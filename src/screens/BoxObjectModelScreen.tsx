import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={ styles.title }> Box Object Model </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title:  {
    padding: 50,
    // paddingBottom: 1,
    // paddingEnd: 1,
    // paddingLeft: 1,
    // paddingStart: 1,
    // paddingRight: 1,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    margin: 10,
    fontSize: 20, 
    // width: 200,
    borderWidth: 5
    // backgroundColor: 'red', 
  }
})