import React, { Component } from 'react'
<<<<<<< HEAD
import { StatusBar, Text, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SwiperComponent from '../components/SwiperComponent'
import { TitleComponent } from '../components/TitleComponent'
import { GalleryComponent } from '../components/GalleryComponent'
=======
import { StatusBar, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SwiperComponent from '../components/SwiperComponent'
import TitleComponent from '../components/TitleComponent'
import GalleryComponent from '../components/GalleryComponent'
>>>>>>> a12a6b9f89397e71543a4001aaa5cd5bde10bbf6

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
            textShadowOffeset: {
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
            {
              text: 'a',
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg'
            },
            {
              text: 'b',
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg'
            },
            {
              text: 'c',
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg'
            }
          ]}
          styleContainer={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            backgroundColor: 'cyan'
          }}
        />
        <GalleryComponent data={[
          {
            image: 'https://images.unsplash.com/photo-1561229980-b674f5893cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          avatar: 'https://images.unsplash.com/photo-1561049841-d1d6a3e212fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60',
          nickname: 'ridhwam nord',
          alias: '@ridzjcob',
          price: '9876.54'
        }
        ]} 
        styleContainer={{
            height: hp('60%'),
            width: wp('100%'),
            backgroundColor: 'blue'
          }}
          sytleItem={{
             height: hp('50%'),
              width: wp('95%'),
              marginHorizontal: wp('2.5%')
            }}
        />
      </ScrollView>
    )
  }
}
export default HomeScreen
