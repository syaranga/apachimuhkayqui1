import React, { Component } from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'

export default class SimpleGalleryComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.slide}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            (this.props.data && this.props.data.length >= 1) && (
              this.props.data.map((item, index) => {
                return (
                  <View key={index} style={styles.item}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                  </View>
                )
              })
            )
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  slide: {},
  item: {},
  image: { width: 100, height: 100, marginHorizontal: 5 }
})
