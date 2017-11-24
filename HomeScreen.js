import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    /*
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };*/
  }


  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() =>{}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
