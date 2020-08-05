import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

export class GridComponent extends Component {
  render () {
    return (
      <View>
        <TextInput
          style={styles.textInput}
        />
        <View>
          <Text style={styles.title}>ALL RESULTS</Text>
        </View>
        <View>
          <Text style={styles.textNumber}>
            {'(<) 1 de 100 (>)'}
          </Text>
        </View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <View style={[styles.item, this.props.styleItem]}>
                <Image
                  key={item.id}
                  style={this.props.styleItem}
                  source={{ uri: item.image }}
                />
                <View style={styles.content}>
                  <Text style={styles.discount}>{item.discount}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

          )}
        />
        <View>
          <Text style={styles.textNumber}>
            {'(<) 1 de 100 (>)'}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    fontSize: '20',
    paddingTop: '20',
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
