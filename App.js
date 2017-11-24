import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import HomeScreen from './HomeScreen'
import BarcodeScanner from './BarcodeScanner'
import { StackNavigator } from 'react-navigation'

const Root = StackNavigator({
  Home : {
    screen : HomeScreen
  },
  Barcode : {
    screen : BarcodeScanner
  }
})

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Root/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
