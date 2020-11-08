import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

export class GridComponent2 extends Component {
  render () {
    return (
      <View>
        <TextInput
          style={styles.textInput}
        />
        <View>
          <Text style={styles.title}> </Text>
        </View>
        <View>
          <Text style={styles.title}> </Text>
        </View>
        <View>
          <Text style={styles.title}>ADS</Text>
        </View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View>
              <TouchableWithoutFeedback onPress={() => this.props.handleOnPress(item)}>
                <View style={[styles.item, this.props.styleItem]}>
                  <Image
                    style={this.props.styleItem}
                    source={{ uri: item.image }}
                  />
                  <View style={styles.content}>
                    <Text style={styles.discount}>{item.discount}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    position: 'relative'
  },
  content: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: '510%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    justifyContent: 'space-between'
  },
  discount: {
    flex: 0.5,
    color: 'red',
    fontWeight: 'bold',
    left: 10,
    top: 0,
    marginLeft: '3%'
  },
  price: {
    flex: 0.5,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: '3%'
  }
})

export default GridComponent2
