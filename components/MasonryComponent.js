import React, { Component } from 'react'
import { View } from 'react-native'
import Masonry from 'react-native-masonry'

export class FavoriteScreen extends Component {
  render () {
    return (
      <View style={this.props.styleContainer}>
        <Masonry
          sorted
          spacing={3}
          columns={2}
          bricks={this.props.data}
        />
      </View>
    )
  }
}

export default FavoriteScreen
