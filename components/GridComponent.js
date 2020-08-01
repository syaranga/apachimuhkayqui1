import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

export class GridComponent extends Component {
  render () {
    return (
      <View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={this.props.styleItem}>
              <Image
                style={{ height: '70%', width: '70%', resizeMode: 'cover' }}
                source={{ uri: item.image }}
              />
              <Text>{item.discount}</Text>
              <Text>{item.price}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}

export default GridComponent
