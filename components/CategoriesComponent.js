import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class CategoriesComponent extends Component {
  render () {
    return (
      <View>
        <CategoryComponent />
      </View>
    )
  }
}

export class CategoryComponent extends Component {
  render () {
    return (
      <View>
        <Text> CategoryComponent </Text>
      </View>
    )
  }
}

export default CategoriesComponent
