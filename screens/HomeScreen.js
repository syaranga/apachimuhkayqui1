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
<<<<<<< HEAD
            textShadowOffeset: {
=======
            textShadowOffset: {
>>>>>>> a12a6b9f89397e71543a4001aaa5cd5bde10bbf6
              width: hp('.3%'),
              height: hp('.3%')
            }
          }}
          style={{
            fontSize: hp('8%')
<<<<<<< HEAD
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
=======
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
>>>>>>> a12a6b9f89397e71543a4001aaa5cd5bde10bbf6
        <GalleryComponent />
      </ScrollView>
    )
  }
}
export default HomeScreen
