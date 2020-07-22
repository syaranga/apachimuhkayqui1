import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class TitleComponent extends Component {
  render () {
    return (
      <View style={this.props.styleContainer}>
<<<<<<< HEAD
        <Text style={this.props.style}> {this.props.title} </Text>
=======
        <Text style={this.props.style}>
          {this.props.title}
        </Text>
>>>>>>> a12a6b9f89397e71543a4001aaa5cd5bde10bbf6
      </View>
    )
  }
}

export default TitleComponent
