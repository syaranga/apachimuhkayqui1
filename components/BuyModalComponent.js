import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Entypo } from '@expo/vector-icons'

const item = [
  {
    image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
    id: 1
  },
  {
    image: 'https://www.insidehook.com/wp-content/uploads/2020/03/dog_adoptions_coronavirus.jpg?fit=1795%2C1200',
    id: 2
  },
  {
    image: 'https://th.bing.com/th/id/OIP.roXztmu92HGfZmh-T6x4awHaHa?pid=Api&w=203&h=203&c=7',
    id: 3
  },
  {
    image: 'https://www.bing.com/images/blob?bcid=TtybFVvDHJsBsw',
    id: 4
  },
  {
    image: 'https://th.bing.com/th/id/OIP.Trws725tqh9vm5LNukOOrwHaE5?pid=Api&w=84&h=84&c=7',
    id: 5
  },
  {
    image: 'https://th.bing.com/th/id/OIP.dDMUv2x_HRcYmfXRjHusGQAAAA?pid=Api&w=120&h=86&c=7',
    id: 6
  },
  {
    image: 'https://th.bing.com/th/id/OIP.02jiiV5WLMpG5BfavUvXUQAAAA?pid=Api&w=100&h=70&c=7',
    id: 7
  },
  {
    image: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
    id: 8
  },
  {
    image: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
    id: 9
  },
  {
    image: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
    id: 10
  },
  {
    image: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
    id: 11
  },
  {
    image: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
    id: 12
  },
  {
    image: 'https://th.bing.com/th/id/OIP.02jiiV5WLMpG5BfavUvXUQAAAA?pid=Api&w=100&h=70&c=7',
    id: 13
  },
  {
    image: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
    id: 14
  },
  {
    image: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
    id: 15
  },
  {
    image: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
    id: 16
  },
  {
    image: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
    id: 17
  },
  {
    image: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
    id: 18
  }
]

class BuyModalComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.buy}>Buy</Text>
            <View style={{ marginTop: hp('2%'), position: 'absolute', right: 0 }}>
              <Entypo name='heart' size={26} color='#FA4CA4' />
            </View>
          </View>
          <View>
            <Image
              key={item.id}
              style={styles.buyImage}
              source={{ uri: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg' }}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatarImage}
                source={{ uri: 'https://images.unsplash.com/profile-1561381043166-4a4993b5f33d?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff' }}
              />
              <View style={styles.user}>
                <Text style={styles.userName}>Ridwhan Nordin</Text>
                <Text style={styles.userAlias}>@ridzjcob</Text>
              </View>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}> $9876.54</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.navigate.pop()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}> Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: '19%',
    marginHorizontal: wp('2.5%'),
    backgroundColor: 'white',
    width: wp('95%'),
    height: hp('78%'),
    alignItems: 'center',
    borderRadius: 8
  },
  buy: {
    textShadowColor: 'gray',
    fontSize: 30,
    textShadowOffset: {
      width: hp('.3%'),
      height: hp('.3%')
    }
  },
  buyImage: {
    height: hp('49%'),
    width: wp('90%'),
    marginTop: '3%'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2.5%'
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  avatarImage: {
    height: 28,
    width: 28,
    borderRadius: 14
  },
  user: {
    marginLeft: '2%'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 11.5
  },
  userAlias: {
    fontSize: 11.5
  },
  priceWrapper: {
  },
  price: {
    fontSize: 34,
    position: 'relative',
    bottom: 10
  },
  addWrapper: {
    borderWidth: 1.5,
    borderWidthColor: 'black',
    borderRadius: 25,
    paddingVertical: hp('2.3%'),
    marginTop: wp('1%')
  },
  addText: {
    textAlign: 'center'
  }
})
export default BuyModalComponent
