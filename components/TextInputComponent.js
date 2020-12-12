import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class TextInputComponent extends Component {
  render () {
    return (
      <TextInput
        style={[styles.textInput, this.props.style]}
        placeholder={this.props.placeholder}
        onChangeText={this.props.handleOnchangeText}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: wp('12%'),
    borderRadius: wp('1%'),
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: wp('1%')
  }
})