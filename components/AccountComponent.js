import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { FlatGrid } from 'react-native-super-grid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export class AccountComponent extends Component {
  render () {
    return (
      <View>
        <View style={styles.context}>
          <View style={styles.user}>
            <Image style={[styles.avatar, this.props.styleAvatar]} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C5603AQH5-cgGGJvI4A/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=HwzDK_qAoTt8Xq8OqFPAKh9KftdFDzb8In6KaZ2NWwQ' }} />
            <View style={styles.userData}>
              <Text style={[styles.nickname, this.props.styleNickname]}>Ridhwan Nordin</Text>
              <Text style={[styles.alias, this.props.styleAlias]}>@ridzjcob</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileWrapper}>
            <Text style={styles.profileTitle}>PROFILE</Text>
            <FontAwesome5
              name='chevron-down' size={15}
              color='black'
              style={styles.profileIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.userInput}>
              <TextInput style={styles.inputName} />
              <TextInput style={styles.inputAlias} />
            </View>
            <View style={styles.emailInput}>
              <TextInput style={styles.inputEmail} />
            </View>
            <View style={styles.phoneInput}>
              <TextInput style={styles.celNumber} />
              <TextInput style={styles.phoneNumber} />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>ADS {'+'} </Text>
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
  user: {
    flex: 1,
    flexDirection: 'row'
  },
  avatar: {
  },
  userData: {},
  nickname: {},
  alias: {},
  profileContainer: {
    marginTop: hp('2%')
  },
  profileWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  profileTitle: {
    fontWeight: 'bold',
    marginLeft: wp('2.5%'),
    fontSize: 12
  },
  profileIcon: {
    position: 'absolute',
    right: 0,
    marginRight: wp('3%'),
    marginTop: hp('0.5%')
  },
  inputContainer: {
    marginTop: hp('0.5%')
  },
  userInput: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '2.5%'
  },
  inputName: {
    borderWidth: 2,
    borderwidthColor: 'black',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('3%'),
    width: wp('60%')
  },
  inputAlias: {
    borderWidth: 2,
    borderwidthColor: 'black',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('3%'),
    marginLeft: wp('1%'),
    width: wp('34%')
  },
  emailInput: {
    marginHorizontal: '2.5%',
    marginTop: hp('1.5%')
  },
  inputEmail: {
    borderWidth: 2,
    borderwidthColor: 'black',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('3%'),
    width: wp('95%')
  },
  phoneInput: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '2.5%',
    marginTop: hp('1.5%')
  },
  celNumber: {
    borderWidth: 2,
    borderwidthColor: 'black',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('3%'),
    width: wp('50%')
  },
  phoneNumber: {
    borderWidth: 2,
    borderwidthColor: 'black',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('3%'),
    marginLeft: wp('1%'),
    width: wp('44%')
  },
  title: {
    justifyContent: 'center',
    fontSize: '20',
    paddingTop: '20',
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
    justifyContent: '',
    backgroundColor: 'white',
    padding: '5%',
    margin: '5%',
    borderRadius: '10%'
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