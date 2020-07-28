import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
export class GridComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.styleSearch}>
          <Text style={styles.styleTitle}>dogs</Text>
        </View>
        <View>
          <Text style={styles.styleSubTitle}>ALL RESULTS</Text>
        </View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={this.props.styleItem}>
              <Image
                style={{ resizeMode: 'cover', flex: 1, height: '98%', width: '100%' }}
                source={{ uri: item.image }}
              />
              <View style={this.props.styleText}>
                <Text style={this.props.styleDiscont}>{item.discount}</Text>
                <Text style={{}}>{item.price}</Text>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  styleSearch: {
    padding: 10
  },
  styleTitle: {
    marginTop: 16,
    paddingVertical: 8,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 0.5,
    color: '#20232a',
    textAlign: 'left',
    fontSize: 30
  },
  styleSubTitle: {
    fontSize: 15,
    padding: 10,
    fontWeight: 'bold'
  }
})
export default GridComponent
