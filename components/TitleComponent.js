import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class TitleComponent extends Component {
  render () {
    return (
      <View style={[styles.container, this.props.styleContainer]}>
        <Text style={[styles.style, this.props.style]}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp('95%'),
    marginHorizontal: wp('2.5%'),
    textShadowColor: 'gray',
    textShadowOffset: {
      width: hp('.3%'),
      height: hp('.3%')
    }
  },
  style: {
    fontSize: hp('8%')
  }
})
