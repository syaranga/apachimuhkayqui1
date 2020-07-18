import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper/src'

const styles = StyleSheet.create({
  container: { fix: 1, justifyContent: 'center', texAlign: 'center' }
})
export class SwiperComponent extends Component {
  constructor (prosp) {
    super(prosp)
    this.state = {}
  }

  render () {
    return (
      <Swiper>
        {
          this.props.data.map((item, index) => {
            return (

              <View key={index} style={styles.container}>
                <Text> {item} </Text>
              </View>
            )
          })
        }
      </Swiper>
    )
  }
}

export default SwiperComponent
