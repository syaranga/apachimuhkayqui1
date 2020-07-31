import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export class GridComponent extends Component {
  render () {
    return (
      <View>
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
                <Text style={styles.texts}>{item.texts}</Text>
                <Text style={styles.discount}>{item.discount}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          )}
        />
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
  texts: {
    flex: 0.10,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: '3%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  discount: {
    flex: 0.8,
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
