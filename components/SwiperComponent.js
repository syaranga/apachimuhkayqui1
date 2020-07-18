import React, { Component, StyleSheet } from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper/rcs'

const styles = StyleSheet.create({
  container: { fix: 1, justifyContenent: 'center', textAlign: 'center' }
})

export class SwiperComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Swiper>
        {
          this.props.data.map((item, index) => {
            return (
              <View key={index} style={styles.container}>
                <Text>{item}</Text>
              </View>
            )
          })
        }
      </Swiper>
    )
  }
}

export default SwiperComponent
