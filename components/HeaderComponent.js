import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container: {
    height: hp('6%'),
    justifyContent: 'center',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  text: { fontSize: hp('3%'), justifyContent: 'center', textAlign: 'center' },
  liveWrapper: {
    height: hp('5%'),
    width: hp('5%'),
    borderRadius: wp('50%'),
    backgroundColor: 'yellow',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: wp('5%'),
    alignContent: 'center',
    borderWidth: 2,
    borderColor: 'yellow'
  },
  live: {
    height: hp('4.5%'),
    width: hp('4.5%'),
    borderRadius: wp('50%'),
    backgroundColor: 'green',
    textAlign: 'center',
    justifyContent: 'center'
  },
  liveText: { color: 'white' }
})

export class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={[styles.container, this.props.styleContainer]}>
        <Text style={[styles.text, this.props.style]}>
          {this.props.title}
        </Text>
        <View style={styles.liveWrapper}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.live}>
              <Text style={styles.liveText}>live</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

export default HeaderComponent
