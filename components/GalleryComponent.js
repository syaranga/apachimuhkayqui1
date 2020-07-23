import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'

export class GalleryComponent extends Component {
  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <ScrollView horizontal style={Styles.ScrollView}>
          {
            this.props.data.map((item, index) => {
              return (
                <View style={Styles.item} key={index}>
                  <View style={Styles.imageWraper} />
                    <Image style={Styles.image} source={{ uri: item.image }} />
                  </View>
                   <View style={Styles.context} />
                   <View style={Styles.user} />
                  <Image style={Styles.avatar} source={{ uri: item.avatar }} />
                  <View style={Styles.userData} />
                  <Text style={Styles.nickname}> {item.nickname}</Text>
                  <Text style={Styles.alias}> {item.alias}</Text>
                   </View>
                    </View>
                  <Text style={Styles.price}> {item.price}</Text>
                </View>
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
const Styles = StyleSheet.create({
  ScrollView: { height: '100%' },
  item: { height: '100%', width: '95%', marginHorizontal: '2.5%' },
  imageWraper: { height: '90%', width: '100%' },
  image: { height: '90%', width: '100%' },
  avatar: { height: '%', width: '%' },
  nickname: {},
  alias: {},
  price: {}
})
export default GalleryComponent
