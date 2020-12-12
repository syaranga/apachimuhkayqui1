import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class SlideComponent extends Component {
  render () {
    return (
      <ScrollView
        horizontal
        style={styles.slide}
      >
        {
          (this.props.data && this.props.data.length >= 1) && (
            this.props.data.map((item, index) => {
              return (
                <ItemComponent data={item} key={index} />
              )
            })
          )
        }
      </ScrollView>
    )
  }
}

export class ItemComponent extends Component {
  render () {
    return (
      <View style={styles.item}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: this.props.data.image }}
        />
        <Text>{this.props.data.brand}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('2.5%')
  },
  item: {
    width: wp('30%'),
    height: wp('45%'),
    marginRight: wp('2.5%')
  }
})
