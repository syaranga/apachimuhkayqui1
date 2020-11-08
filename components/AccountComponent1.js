import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { FlatGrid } from 'react-native-super-grid'

export class AccountComponent1 extends Component {
  render () {
    return (
      <View>
        <View style={styles.context}>
          <View style={styles.user}>
            <Image style={[styles.avatar, this.props.styleAvatar]} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' }} />
            <View style={styles.userData}>
              <Text style={[styles.nickname, this.props.styleNickname]}>Ridhwan Nordin</Text>
              <Text style={[styles.alias, this.props.styleAlias]}>@ridzjcob</Text>
            </View>
          </View>
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
                <FontAwesome5 name='trash-alt' size={15} color='black' />
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  context: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  user: { flex: 1, flexDirection: 'row' },
  avatar: {

  },
  userData: {},
  nickname: {},
  alias: {},
  title: {
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  item: {
    position: 'relative'
  },
  content: {
    position: 'absolute',
    right: 0,
    left: 75,
    width: 23,
    bottom: '5%',
    backgroundColor: 'white',
    padding: '5%',
    margin: '5%'
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

export default AccountComponent1
