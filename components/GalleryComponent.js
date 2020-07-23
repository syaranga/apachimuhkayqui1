import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Gallery from 'react-native-swiper/src'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', textAlign: 'center' }
})
export class GalleryComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <Gallery>

          {
            this.props.data.map((item, index) => {
              return (
                <View key={index} style={styles.container}>
                  <Image
                    style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                    source={{ uri: item.image }}
                  />
                  <Text>
                    <Text style={styles.text1}>PSimon Zhu</Text>
                    <Text style={styles.text2}>@smnzhu</Text>
                    <Text style={styles.text3}>$9876.54</Text>
                  </Text>
                </View>
              )
            })
          }
        </Gallery>
      </View>
    )
  }
}

export default GalleryComponent
