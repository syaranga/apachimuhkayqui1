import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
  view1: { flex: 1, flexDirection: 'row', backgroundColor: 'white' },
  nickname: { marginTop: hp('1.7%'), fontWeight: 'bold', marginLeft: wp('1.5%'), fontSize: 13 },
  price: { position: 'absolute', right: '0', top: '0', alignItems: 'center', paddingBottom: hp('5%') },
  textPrice: { fontSize: 40 }
})
export class GalleryComponent extends Component {
  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <ScrollView horizontal>
          {
            this.props.data.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    style={{ height: hp('58.5%'), width: wp('95%'), resizeMode: 'cover' }}
                    source={item.image}
                  />
                  <View style={styles.view1}>
                    <View>
                      <Image
                        style={{ marginLeft: wp('0.5%'), marginTop: hp('2%'), borderRadius: 15, height: 30, width: 30, resizeMode: 'cover' }}
                        source={item.avatar}
                      />
                    </View>
                    <View>
                      <Text style={styles.nickname}>
                        {item.nickname}
                      </Text>
                      <Text style={{ color: 'gray', marginLeft: wp('1.5%'), fontSize: 12 }}>
                        {item.alias}
                      </Text>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.textPrice}>
                        {item.precio}
                      </Text>
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

export default GalleryComponent
