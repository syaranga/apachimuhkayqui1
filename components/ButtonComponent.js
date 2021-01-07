  
import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class ButtonComponent extends Component {
  render () {
    return (
      <TouchableWithoutFeedback onPress={this.props.handleOnPress}>
        <View style={[styles.container, this.props.styleContainer]}>
          <Text style={styles.text}>
            {this.props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: wp('12%'),
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
    fontSize: wp('4%'),
    textAlign: 'center',
    fontWeight: 'bold'
  }
})