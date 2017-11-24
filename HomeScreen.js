import React from 'react';
import { StyleSheet, Text, View, ListView, Image, Button } from 'react-native';

export default class HomeScreen extends React.Component {

  state = {
    persons : []
  }

  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    /*
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };*/

    this._scan = this._scan.bind(this)
    this._addPerson = this._addPerson.bind(this)
    this._renderPerson = this._renderPerson.bind(this)
  }

  _renderPerson = (person) => {
    return (
      <View style={{ flex : 1, flexDirection : 'row',}}>
        <Image source={{ uri : person.imageUrl }} style={{ height: 200, width: 200 }} />
        <Text>{`${person.firstName} ${person.lastName}`}</Text>
      </View>
    )
  }

  _addPerson = (person) => {

    this.setState({
      persons : [...this.state.persons,person]
    })
    
  }
 
  _scan = () => {
    this.props.navigation.navigate('Barcode', { addPerson : this._addPerson })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._scan.bind(this)}
          title="Scan"
          color="#841584"
          accessibilityLabel="Scan button"
        />
        {
          this.state.persons.length > 0 ?
          <ListView
            dataSource={this.ds.cloneWithRows(this.state.persons)}
            renderRow={this._renderPerson}
          /> :
          <Text>No persons</Text>
        } 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
