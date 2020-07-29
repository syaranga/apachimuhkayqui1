import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export class GridComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.allRes}>ALL RESULTS</Text>
        <Text style={styles.cantidad}> {'(<)1 de 100(>)'} </Text>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={this.props.styleItem}>
              <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{ uri: item.image }} />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.discount}>{item.discount}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          )}
        />
        <Text style={styles.cantidadFinal}> {'(<)1 de 100(>)'} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', paddingBottom: wp('5%') },
  input: { borderWidth: 2, padding: wp('2.5%'), marginHorizontal: wp('2.5%') },
  allRes: { marginHorizontal: wp('2.5%'), fontWeight: 1000, fontSize: 12, marginTop: hp('1%') },
  cantidad: { fontFamily: 'Arial', fontSize: 13, textAlign: 'center', position: 'relative', top: 8 },
  cantidadFinal: { fontFamily: 'Arial', fontSize: 13, textAlign: 'center', position: 'relative', bottom: 13 },
  imageWrapper: { height: hp('10%'), width: wp('25%') },
  image: { heigth: hp('25%'), width: wp('25%') },
  textWrapper: { backgroundColor: '#FF000020', flexDirection: 'row', marginBottom: hp('1%') },
  discount: { color: 'red', fontWeight: 'bold', fontSize: 13, marginLeft: 2 },
  price: { fontSize: 13, position: 'absolute', right: 0, marginRight: 2 }
})

export default GridComponent
