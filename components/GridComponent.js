import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

export class GridComponent extends Component {
  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <FlatGrid
          itemDimension={90}
          data={this.props.data}
          renderItem={({ item, index }) => (
            <View style={[styles.item, this.props.styleItem]} key={index}>
              <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{ uri: item.image }} />
              </View>
              <View style={styles.context}>
                <View styles={styles.discount}>
                  <Text style={[styles.discount, this.props.stylediscount]}>{item.discount}</Text>
                </View>
                <View styles={styles.priceWrapper}>
                  <Text style={[styles.price, this.props.stylePrice]}>{item.price}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {},
  item: {},
  imageWrapper: {
    height: '95%',
    width: '65%',
    marginTop: '20'
  },
  image: {
    height: '100%',
    width: '150%',
    marginTop: '20'
  },
  context: {
    flex: 1,
    justifyContent: 'center'
  },
  discount: {
    color: 'red'
  },
  userData: {},
  priceWrapper: {
    justifyContent: 'space-evenly'
  },
  price: {
    fontSize: '80%',
    marginTop: '20',
    fontWeight: 'bold'
  }
})
export default GridComponent
