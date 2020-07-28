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
                style={{ resizeMode: 'cover', width: '100%', height: '85%' }}
                source={{ uri: item.image }}
              />
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item.discount}</Text>
                <Text>{item.price}</Text>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}

export default GridComponent