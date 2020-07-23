import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

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
                    <Text>item.nickname</Text>
                    <Text>{item.alias}</Text>
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

const styles = StyleSheet.create({
  scrollView: {},
  item: {},
  imageWrapper: { height: '90%', width: '100%', marginBottom: '2%' },
  image: { height: '100%', width: '100%' },
  context: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  user: { flex: 1, flexDirection: 'row' },
  avatar: { marginRight: '5%' },
  userData: {},
  nickname: { fontSize: '120%' },
  alias: {},
  priceWrapper: {},
  price: { fontSize: '200%' }
})

export default GalleryComponent
