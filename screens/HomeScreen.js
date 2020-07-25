import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SwiperComponent from '../components/SwiperComponent'
import TitleComponent from '../components/TitleComponent'
import GalleryComponent from '../components/GalleryComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <StatusBar hidden />
        <TitleComponent
          title='Discover'
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
        <SwiperComponent
          data={[
            { text: 'a', image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg' },
            { text: 'b', image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg' },
            { text: 'c', image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg' }
          ]}
          styleContainer={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            backgroundColor: 'cyan'
          }}
        />
        <GalleryComponent
          data={[
            { image: 'http://img.mwmw.cn/forum/month_0610/UFJBREFAbWVnYQ==_uPkKzPO6uZ6V.jpg', avatar: 'https://th.bing.com/th/id/OIP.2CzGho8LfDF8KopPuUdKAQHaHa?pid=Api&w=500&h=500&rs=1', nickname: 'Ridwan Nordin', alias: '@ridzjcath', price: ' $9876.54' },
            { image: 'https://i.ebayimg.com/00/s/OTYwWDcyMA==/z/7x0AAOSwftNcoAFv/$_10.JPG', avatar: 'https://th.bing.com/th/id/OIP.2CzGho8LfDF8KopPuUdKAQHaHa?pid=Api&w=500&h=500&rs=1', nickname: 'Cleam Onojghuo', alias: '@clemano2', price: ' $9876.54' },
            { image: 'https://th.bing.com/th/id/OIP.PmM_HegDS3ZOOSc6qII-xwHaE8?pid=Api&w=3456&h=2304&rs=1', avatar: 'https://th.bing.com/th/id/OIP.2CzGho8LfDF8KopPuUdKAQHaHa?pid=Api&w=500&h=500&rs=1', nickname: 'Jhon Tyson', alias: '@jontyson', price: ' $9876.54' },
            { image: 'https://images.unsplash.com/photo-1561049841-d1d6a3e212fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60', avatar: 'https://th.bing.com/th/id/OIP.2CzGho8LfDF8KopPuUdKAQHaHa?pid=Api&w=500&h=500&rs=1', nickname: 'Simon Zhu', alias: '@smozhu', price: ' $9876.54' }
          ]}
          styleContainer={{
            height: hp('70%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            backgroundColor: 'cyan'
          }}
        />
      </ScrollView>
    )
  }
}

export default HomeScreen
