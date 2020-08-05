import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'

export class BuyModalComponent extends Component {
  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <ScrollView horizontal style={styles.scrollView}>
          {
            this.props.data.map((item, index) => {
              return (
                <View style={[styles.item, this.props.styleItem]} key={index}>
                  <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                  </View>
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
  imageWrapper: { height: '90%', width: '100%', marginBottom: '2%' },
  image: { height: '100%', width: '100%' },
  context: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  user: { flex: 1, flexDirection: 'row' },
  avatar: { marginRight: '5%' },
  userData: {},
  nickname: {},
  alias: {},
  priceWrapper: {},
  price: {}
})

export default BuyModalComponent
