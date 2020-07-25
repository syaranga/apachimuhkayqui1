import React, { Component } from 'react'
import { Text, View, ScrollView,StyleSheet, Image } from 'react-native'

export class GalleryComponent extends Component {
  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <ScrollView>
          {
            this.props.data.map((item, index) => {
              return (
                <View key={index}>
                  <Text>
                    {item.image}
                    {item.avatar}
                    {item.nickname}
                    {item.alias}
                  </Text>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

export default GalleryComponent
