import React, { Component } from 'react'
<<<<<<< HEAD
import { Text, View, Image, StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
=======
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
>>>>>>> 7c136f14f6ec382e05deff7285eb509c34154086

export class GridComponent extends Component {
  render () {
    return (
<<<<<<< HEAD
      <View style={styles.container}>
=======
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
>>>>>>> 7c136f14f6ec382e05deff7285eb509c34154086
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
<<<<<<< HEAD
            <View style={this.props.styleItem}>
              <Image
                style={{ resizeMode: 'cover', flex: 1, height: '98%', width: '100%' }}
                source={{ uri: item.image }}
              />
              <View style={this.props.styleText}>
                <Text style={this.props.styleDiscont}>{item.discount}</Text>
                <Text style={{ }}>{item.price}</Text>
=======
            <View style={[styles.item, this.props.styleItem]}>
              <Image
                style={this.props.styleItem}
                source={{ uri: item.image }}
              />
              <View style={styles.content}>
                <Text style={styles.discount}>{item.discount}</Text>
                <Text style={styles.price}>{item.price}</Text>
>>>>>>> 7c136f14f6ec382e05deff7285eb509c34154086
              </View>
            </View>
          )}
        />
<<<<<<< HEAD
=======
        <View>
          <Text style={styles.textNumber}>
            {'(<) 1 de 100 (>)'}
          </Text>
        </View>
>>>>>>> 7c136f14f6ec382e05deff7285eb509c34154086
      </View>
    )
  }
}
<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  styleSearch: {
    padding: 10
  },
  styleTitle: {
    marginTop: 16,
    paddingVertical: 8,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 0.5,
    color: '#20232a',
    textAlign: 'left',
    fontSize: 30
  },
  styleSubTitle: {
    fontSize: 15,
    padding: 10,
    fontWeight: 'bold'
  }
})
=======

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

>>>>>>> 7c136f14f6ec382e05deff7285eb509c34154086
export default GridComponent
