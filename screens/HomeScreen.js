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
            { image: 'https://images.unsplash.com/photo-1561435133-c44befe370ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60.jpg', avatar: '', nickname: 'Ridhwan Nordin', alias: '@ridzjcob', price: '$9876.54' },
            { image: 'https://images.unsplash.com/photo-1561229980-b674f5893cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', avatar: '', nickname: 'Clem Onojeghuo', alias: '@clemono2', price: '$9876.54' },
            { image: 'https://images.unsplash.com/photo-1561206204-a403713d7ea8?ixlib=rb-1.2.1&w=1000&q=80', avatar: '', nickname: 'Jon Tyson', alias: '@jontyson', price: '$9876.54' },
            { image: 'https://images.unsplash.com/photo-1561049841-d1d6a3e212fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80Usan', avatar: '', nickname: 'Simon Zhu', alias: '@smnzhu', price: '$9876.54' }
          ]}
        />
      </ScrollView>
    )
  }
}

export default HomeScreen
