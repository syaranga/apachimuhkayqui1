import React, { Component } from 'react'
import { Text, View, ImageBackground, TextInput, StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export class GridComponent extends Component {
  render () {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder='dogs'
        />
        <View>
          <Text style={styles.text1}>ALL RESULTS</Text>
        </View>
        <View>
          <Text style={styles.textNumber}>() 1 de 100 ()</Text>
        </View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View>
              <View style={this.props.styleItem}>
                <ImageBackground
                  style={{ resizeMode: 'cover', height: wp('30%'), width: hp('18%'), flex: 1 }}
                  source={{ uri: item.image }}
                />
                <View style={[styles.content]}>
                  <View>
                    <Text style={styles.discount}>{item.discount}</Text>
                  </View>
                  <View>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
        <View>
          <Text style={styles.textNumber}>() 1 de 100 ()</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text1: {
    justifyContent: 'center',
    fontSize: '20',
    paddingTop: '20',
    margin: 10,
    fontWeight: 'bold'
  },
  textInput: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 2,
    marginHorizontal: '3%'
  },
  textNumber: {
    textAlign: 'center'
  },
  content: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    width: hp('18%'),
    paddingHorizontal: 5
  },
  discount: {
    color: 'red',
    fontWeight: 'bold'
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'right'
  }
})

export default GridComponent
