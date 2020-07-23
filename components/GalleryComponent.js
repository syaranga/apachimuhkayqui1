import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', height: '100%' }
})

export class GalleryComponent extends Component {
  render () {
    return (
      <View style={[this.props.styleContainerGallery]}>
        <ScrollView>
          {
            this.props.data.map((item, index) => {
              return (
                <View key={index} style={styles.container}>
                  <Image
                    style={{ height: hp('100%'), width: wp('100%'), resizeMode: 'cover' }}
                    source={{ uri: item.image }}
                  />
                  <Image
                    style={{ height: '5%', width: '8%', borderRadius: '50%', resizeMode: 'cover', marginVertical: hp('2%') }}
                    source={{ uri: item.avatar }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text>nickname</Text>
                    <Text>@alias</Text>
                  </View>
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
