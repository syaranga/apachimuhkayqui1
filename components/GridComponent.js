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
        <Text style={styles.pag}> {'(<)1 de 100(>)'} </Text>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={this.props.styleItem}>
              <Image source={{ uri: item.image }} style={{ width: wp('30%'), height: hp('19%') }} />
              <View style={styles.textWrapper}>
                <Text style={styles.discount}>{item.discount}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          )}
        />
        <Text style={styles.pagFinal}> {'(<)1 de 100(>)'} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', paddingBottom: wp('5%') },
  input: { borderWidth: 2, padding: wp('2.5%'), marginHorizontal: wp('2.5%') },
  allRes: { marginHorizontal: wp('2.5%'), fontWeight: 1000, fontSize: 12, marginTop: hp('1%') },
  pag: { fontFamily: 'Arial', fontSize: 13, textAlign: 'center', position: 'relative', top: 8, fontWeight: 510 },
  pagFinal: { fontFamily: 'Arial', fontSize: 13, textAlign: 'center', position: 'relative', bottom: 13, fontWeight: 510 },
  textWrapper: { backgroundColor: '#FFFFFF50', flexDirection: 'row', marginBottom: hp('0.5%'), position: 'absolute', width: wp('30%') },
  discount: { color: 'red', fontWeight: 550, fontSize: 14, marginLeft: 2, fontFamily: 'Century Gothic' },
  price: { fontSize: 14, position: 'relative', marginLeft: wp('9.5%'), fontWeight: 549.5, fontFamily: 'Century Gothic' }
})
export default GridComponent
