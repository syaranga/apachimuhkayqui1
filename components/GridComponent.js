import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

export class GridComponent extends Component {
  render () {
    return (
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
                  <View style={{ flex: 0.5 }}>
                    <Text style={styles.discount}>{`${item.brand} ${item.model}`}</Text>
                  </View>
                  <View style={{ flex: 0.5 }}>
                    <Text style={styles.discount}>{item.discount}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  textInput: {
    height: 45,
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: '3%',
    paddingHorizontal: '3%'
  },
  textNumber: {
    textAlign: 'center'
  },
  item: {
    position: 'relative'
  },
  content: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: '5%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    justifyContent: 'space-between'
  },
  discount: {
    flex: 0.5,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: '3%'
  },
  price: {
    flex: 0.5,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: '3%'
  }
})

export default GridComponent
