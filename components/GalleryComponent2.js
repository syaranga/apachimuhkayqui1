import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'

export class GalleryComponent extends Component {
  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollView}>
          {
            this.props.data.map((item, index) => {
              return (
                <View style={[styles.item, this.props.styleItem]} key={index}>
                  <View style={styles.context}>
                    <View style={styles.user}>
                      <Image style={[styles.avatar, this.props.styleAvatar]} source={{ uri: item.avatar }} />
                      <View style={styles.userData}>
                        <Text style={[styles.nickname, this.props.styleNickname]}>{item.nickname}</Text>
                        <Text style={[styles.alias, this.props.styleAlias]}>{item.alias}</Text>
                      </View>
                    </View>
                    <View styles={styles.priceWrapper}>
                      <Text style={[styles.price, this.props.stylePrice]}>{item.price}</Text>
                      <Text style={[styles.price2, this.props.stylePrice2]}>{item.price2}</Text>
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

const styles = StyleSheet.create({
  scrollView: {},
  item: {},
  context: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  user: { flex: 1, flexDirection: 'row' },
  avatar: { marginRight: '5%' },
  userData: {},
  nickname: {},
  alias: {},
  priceWrapper: {},
  price: { color: 'red' },
  price2: { color: 'black' }
})

export default GalleryComponent
