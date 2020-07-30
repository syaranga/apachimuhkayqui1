import React, { Component } from 'react'
import { ScrollView, StatusBar, View, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import TitleComponent from '../components/TitleComponent'
import MasonryComponent from '../components/MasonryComponent'

export class FavoriteScreen extends Component {
  renderFooterMasonry (data) {
    return (
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
      >
        <View style={{
          backgroundColor: 'white',
          padding: '3%',
          margin: '3%',
          borderRadius: '1%'
        }}
        >
          <MaterialIcons name='add-shopping-cart' size={15} color='black' />
        </View>
        <View style={{
          backgroundColor: 'white',
          padding: '3%',
          margin: '3%',
          borderRadius: '1%'
        }}
        >
          <FontAwesome5 name='trash-alt' size={15} color='black' />
        </View>
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        <StatusBar hidden />
        <TitleComponent
          title='Favorite'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            textShadowColor: 'gray',
            textShadowOffset: {
              width: hp('.3%'),
              height: hp('.3%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />
        <MasonryComponent
          data={[
            {
              uri: 'https://c0.wallpaperflare.com/preview/982/739/828/tumblr.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://c0.wallpaperflare.com/preview/175/778/434/accessory-sunglasses-accessories-human-thumbnail.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://p0.piqsels.com/preview/989/487/624/closeup-zoom-bokeh-abstract.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://c.pxhere.com/photos/b9/da/photo-81144.jpg!d',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://p0.piqsels.com/preview/589/846/331/portrait-eyes-pure-golden.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://s3.us-west-1.wasabisys.com/kadence/kt_22_image_03-min.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://s-media-cache-ak0.pinimg.com/600x315/b5/7e/37/b57e3755560125c82f3a2c20f20e6223.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://static.seattletimes.com/wp-content/uploads/2017/02/41ea8bde4534470fae6c8240acad1476-780x1169.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://thedogbookcompany.com/wp-content/uploads/2019/10/French-Bulldog-Pictures-Adventure.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://www.bitseven.de/wp-content/uploads/Leistungen-Werbeagentur-Grossartige-Webseiten-683x1024.jpg',
              renderFooter: this.renderFooterMasonry
            }
          ]}
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
      </ScrollView>
    )
  }
}

export default FavoriteScreen
