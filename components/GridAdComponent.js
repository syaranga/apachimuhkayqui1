import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { FontAwesome5 } from '@expo/vector-icons'

export default class GridAdComponent extends Component {
  render () {
    return (
      <View>
        <View>
          <Text style={styles.title}>ADS {'+'}</Text>
        </View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={[styles.item, this.props.styleItem]}>
              <Image
                style={this.props.styleItem}
                source={{ uri: item.image }}
              />
              <View style={styles.content}>
                <FontAwesome5 name='trash-alt' size={15} color='black' />
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {}
})
