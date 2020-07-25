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
            backgroundColor: '#F4F1F0'
          }}
        />
        <GalleryComponent
          data={[
            { image: 'https://images.unsplash.com/photo-1561435133-c44befe370ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', avatar: 'https://images.unsplash.com/profile-1561381043166-4a4993b5f33d?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff', nickname: 'Ridhwan Nordin', alias: '@ridzjcob', precio: '$9876.54' },
            { image: 'https://images.unsplash.com/photo-1561229980-b674f5893cba?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', avatar: 'https://images.unsplash.com/profile-1537740391424-86188f82f007?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff', nickname: 'Clem Onojeghuo', alias: '@clemono2', precio: '$9876.54' },
            { image: 'https://p1.piqsels.com/preview/572/646/384/man-standing-beside-motor-scooter-wall-paint.jpg', avatar: 'https://images.unsplash.com/profile-1528230399047-c8d0d832ed9d?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff', nickname: 'Jon Tyson', alias: '@jontyson', precio: '$9876.54' },
            { image: 'https://images.unsplash.com/photo-1561049841-d1d6a3e212fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80', avatar: 'https://images.unsplash.com/profile-1536272917609-15221a21c8e6?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff', nickname: 'Simon Zhu', alias: '@smnzhu', precio: '$9876.54' }
          ]}
          styleContainer={{
            marginVertical: wp('2.5%'),
            height: hp('70%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            backgroundColor: '#F4F1F0'
          }}
        />
      </ScrollView>
    )
  }
}

export default HomeScreen
