import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export class AccountComponent extends Component {
  render () {
    return (
      <View style={[styles.container]}>
        <View style={styles.slide}>
          <Image
            style={[styles.avatar, this.props.styleAvatar]}
            source={{ uri: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CWDQQL6GUIJMS/ProductCatalog.CZA2BKJX3S376/1500x1500/CZA7BICTERC22.jpg' }}
          />
          <View>
            <Text style={[styles.nickname, this.props.styleNickname]}>Metal Earrings</Text>
            <Text style={[styles.alias, this.props.styleAlias]}>Special Desing</Text>
            <View style={styles.price1}>
              <Text style={[styles.price1, this.props.stylePrice1]}>$/. 9999.5</Text>
              <Text style={[styles.price2, this.props.stylePrice2]}>$/. 9999</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: { flexDirection: 'row', padding: 5 },
  price1: {
    color: 'red',
    left: 225,
    bottom: 42
  },
  avatar: {
    height: wp('15%'),
    width: wp('15%'),
    borderRadius: wp('20%')
  },
  nickname: {
    fontSize: wp('4%'),
    fontWeight: 'bold'
  },
  alias: {
    fontSize: wp('4%')
  },
  input1: {
    padding: 5
  }
})

export default AccountComponent
