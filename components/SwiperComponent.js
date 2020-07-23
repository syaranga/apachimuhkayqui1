import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper/src'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', textAlign: 'center' }
})

export class SwiperComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <Swiper>
          {
            this.props.data.map((item, index) => {
              return (
                <View key={index} style={styles.container}>
                  <Image
                    style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                    source={{ uri: item.image }}
                  />
<<<<<<< HEAD
                  {/* { /<Text> {item.text} </Text>/ } */}
=======
                  {/* <Text> {item.text} </Text> */}
>>>>>>> 47d833b5e80645d80f32ff6990087330546fe1f0
                </View>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}

export default SwiperComponent
