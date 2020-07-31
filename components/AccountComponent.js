import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { FlatGrid } from 'react-native-super-grid'
import { FontAwesome5 } from '@expo/vector-icons'

export class AccountComponent extends Component {
  render () {
    return (
      <View style={[styles.styleItem]}>
        <View style={[styles.item]}>
          <View style={styles.context}>
            <View style={styles.user}>
              <Image style={[styles.avatar, styles.styleAvatar]} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' }} />
              <View style={styles.userData}>
                <Text style={[styles.styleNickname]}>Ridhwan Nordin</Text>
                <Text style={[styles.styleAlias]}>@ridzjcob</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>ADS +</Text>
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
  context: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  user: { flex: 1, flexDirection: 'row' },
  avatar: { marginRight: '5%' },
  styleAvatar: {
    height: hp('7%'),
    width: hp('7%'),
    borderRadius: hp('7%'),
    backgroundColor: 'red'
  },
  styleNickname: {
    fontSize: hp('5%'),
    fontWeight: 'bold'
  },
  styleAlias: {
    fontSize: hp('3%')
  },
  styleItem: {
    width: wp('95%'),
    marginHorizontal: wp('2.5%')
  },
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
    bottom: '5%',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: '3%',
    margin: '3%',
    borderRadius: '1%'
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
