import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class TitleComponent extends Component {
  render () {
    return (
      <View style={this.props.styleContainer}>
        <Text style={this.props.style}> {this.props.title} </Text>
        <Text style={this.props.style}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

export default TitleComponent
