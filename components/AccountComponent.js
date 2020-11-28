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
            <Text style={[styles.nickname, this.props.styleNickname]}>Ridhwan Nordin</Text>
            <Text style={[styles.alias, this.props.styleAlias]}>@ridzjcob</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: { flexDirection: 'row' },
  avatar: {
    height: wp('20%'),
    width: wp('20%'),
    borderRadius: wp('20%')
  },
  nickname: {
    fontSize: wp('8%'),
    fontWeight: 'bold'
  },
  alias: {
    fontSize: wp('8%')
  }
})

export default AccountComponent
