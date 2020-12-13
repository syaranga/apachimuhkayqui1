import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class SlideItemComponent extends Component {
  render () {
    return (
      <ScrollView
        horizontal
        style={styles.container}
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
        <View style={{ position: 'absolute', flex: 1 }}>
          <View>
            <Text>{this.props.data.brand}</Text>
            <Text>{this.props.data.model}</Text>
            <Text>{this.props.data.description}</Text>
            <Text>{this.props.data.original_price}</Text>
            <Text>{this.props.data.price}</Text>
          </View>
          <View>
            <View>
              <Text>add</Text>
            </View>
            <View>
              <Text>love</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('2.5%')
  },
  item: {
    position: 'relative',
    width: wp('46.25%'),
    height: wp('46.25%') * 1.32,
    marginRight: wp('2.5%')
  }
})
