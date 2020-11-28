import React, { Component } from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class SimpleGalleryComponent extends Component {
  render () {
    return (
      <View style={[styles.container, this.props.styleContainer]}>
        <ScrollView
          style={styles.slide}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            (this.props.data && this.props.data.length >= 1) && (
              this.props.data.map((item, index) => {
                return (
                  <View key={index} style={[styles.item, (index === 0 && { marginLeft: 0 })]}>
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
  slide: {
    paddingHorizontal: wp('2.5&')
  },
  item: { marginLeft: 10 },
  image: { width: 100, height: 100, marginHorizontal: 5 }
})