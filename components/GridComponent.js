import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

export class GridComponent extends Component {
  render () {
    return (
      <View style={styles.All}>
        <View>
          <Text style={styles.search}>dogs</Text>
        </View>
        <View>
          <Text style={styles.resultado}>ALL RESULTS</Text>
        </View>
        <View >
          <Text style={styles.contenedor}> (&lt;) 1 de 100 (&gt;) </Text>
        </View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={this.props.styleItem}>
              <Image
                style={{ resizeMode: 'cover', width: ('101%'), height: ('101%') }}
                source={{ uri: item.image }}
              />
              <View style={this.props.bigprice}>
                <Text style={[styles.discount, this.props.discount]}>{item.discount}</Text>
                <Text style={[styles.price, this.props.price]}>{item.price}</Text>
              </View>
            </View>
          )}
        />
        <View>
          <Text style={styles.contenedor}> (&lt;) 1 de 100 (&gt;) </Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    marginHorizontal: 13,
    borderColor: '#000',
    borderWidth: 1,
    padding: ('4%'),
    fontSize: '100%'
  },
  resultado: {
    marginVertical: 14,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  contenedor: {
    textAlign: 'center',
    fontSize: '100%',
    color: 'black'
  },

  All: {
    backgroundColor: 'white'
  }

})

export default GridComponent
