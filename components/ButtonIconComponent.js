import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesing } from '@expo/vector-icons'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class ButtonIconComponent extends Component {
  render () {
    return (
      <View style={[styles.container, this.props.stylesContainer]}>
        <AntDesing
          style={[styles.icon, this.props.styleIcon]}
          name='home'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp('8%'),
    height: wp('8%'),
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center'
  },
  icon: {
    color: '#000000',
    fontSize: 24,
    backgroundColor: 'pink',
    textAlign: 'center'
  }
})
