import React, {
  Component
} from 'react'
import {
  StatusBar,
  ScrollView
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import SwiperComponent from '../components/SwiperComponent'
import TitleComponent from '../components/TitleComponent'
import GalleryComponent from '../components/GalleryComponent'

export class HomeScreen extends Component {
  render () {
    return (<ScrollView>
      <StatusBar hidden />
      <TitleComponent
        title='Discover'
        styleContainer={
          {
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            textShadowColor: 'gray',
            textShadowOffset: {
              width: hp('.3%'),
              height: hp('.3%')
            }
          }
        }
        style={
          { fontSize: hp('8%') }
        }
      /> <SwiperComponent
        data={
          [{
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
          ]
        }
        styleContainer={
          {
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            marginBottom: wp('2.5%'),
            backgroundColor: 'cyan'
          }
        }
         /> <GalleryComponent
        data={
          [{
            image: 'http://i1.wp.com/johnlewisglass.com/wp-content/uploads/2016/04/8-1.png?w=640',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
            nickname: 'ridhwan nordin',
            alias: '@ridzjcob',
            price: '9876.54'
          },
          {
            image: 'https://images.unsplash.com/photo-1561229980-b674f5893cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            avatar: 'https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg',
            nickname: 'clem onojeghuo',
            alias: '@clemono2',
            price: '9876.54'
          },
          {
            image: 'https://i.pinimg.com/originals/b0/b8/21/b0b821853ad3de7e3a4c957817ba5a2d.jpg',
            avatar: 'https://newcastlebeach.org/images/man-picture.jpg',
            nickname: 'jon tyson',
            alias: '@jontyson',
            price: '9876.54'
          },
          {
            image: 'https://scontent.flim22-1.fna.fbcdn.net/v/t1.0-9/p960x960/67139255_489779711566046_9015261501061070848_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeEDK5RDKsTynS2JYj7NfGqIqq9RepxIss2qr1F6nEiyzSNaqwzA2XoIqj4Eyk3Ty39qkDW5_5OfXNywPytfMYee&_nc_ohc=9hy-4b-XawMAX_IZloB&_nc_ht=scontent.flim22-1.fna&_nc_tp=6&oh=a6a82659a6dff635a49b398a24133999&oe=5F3E6583',
            avatar: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg',
            nickname: 'simon zhu',
            alias: '@smnzhu',
            price: '9876.54'
          }
          ]
        }
        styleContainer={
          {
            height: hp('55%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }
        }
        styleItem={
          {
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }
        }
        styleAvatar={
          {
            height: hp('7%'),
            width: hp('7%'),
            borderRadius: hp('7%')
          }
        }
         />
            </ScrollView>
    )
  }
}

export default HomeScreen
