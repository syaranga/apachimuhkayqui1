import React, { Component } from 'react'
import { Text, View, ScrollView, wp, hp } from 'react-native'
import SwiperComponent from '../components/SwiperComponent'

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
                  <SwiperComponent
                    data={[
                      { text: 'c', image: 'https://images.unsplash.com/photo-1561049841-d1d6a3e212fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' }
                    ]}
                    styleContainer={{
                      height: hp('60%'),
                      width: wp('95%'),
                      marginHorizontal: wp('2.5%'),
                      backgroundColor: 'white'
                    }}
                  />
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
