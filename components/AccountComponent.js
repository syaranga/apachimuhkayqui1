import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import Masonry from 'react-native-masonry'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export class AccountComponent extends Component {
  render () {
    return (
      <View>
        <View>
          <Text style={styles.title}>Ridhwan Nordin</Text>
        </View>
        <View>
          <Text style={styles.textNumber}>
            {'@ridzjcob'}
          </Text>
        </View>
        <View style={this.props.styleContainer}>
          <Masonry
            sorted
            spacing={3}
            columns={2}
            bricks={this.props.data}
          />
        </View>
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
    fontSize: '45',
    paddingTop: '20',
    fontWeight: 'bold',
    marginLeft: '20%'

  },
  textNumber: {
    fontSize: '15',
    marginLeft: '20%'
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

export default AccountComponent
