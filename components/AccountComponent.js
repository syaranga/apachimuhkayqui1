import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

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

export default AccountComponent
