import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import GalleryComponent from '../components/GalleryComponent'
import TitleSectionComponent from '../components/TitleSectionComponent'
import SimpleGalleryComponent from '../components/SimpleGalleryComponent'
import ButtonComponent from '../components/ButtonComponent'
import SlideItemComponent from '../components/SlideItemComponent'

export class DetailItemScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent title='Detail item' />
        <GalleryComponent
          data={[
            {
              image: 'http://i1.wp.com/johnlewisglass.com/wp-content/uploads/2016/04/8-1.png?w=640',
              avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
              nickname: 'ridhwan nordin',
              alias: '@ridzjcob',
              price: '9876.54'
            },
            {
              image: 'https://i.pinimg.com/originals/b0/b8/21/b0b821853ad3de7e3a4c957817ba5a2d.jpg',
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
              image: 'https://i.pinimg.com/originals/b0/b8/21/b0b821853ad3de7e3a4c957817ba5a2d.jpg',
              avatar: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg',
              nickname: 'simon zhu',
              alias: '@smnzhu',
              price: '9876.54'
            }
          ]}
          styleContainer={{
            height: hp('55%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
          styleAvatar={{
            height: hp('7%'),
            width: hp('7%'),
            borderRadius: hp('7%')
          }}
          stylePrice={{
            fontSize: hp('5%')
          }}
          styleNickname={{
            fontSize: hp('3%')
          }}
          styleAlias={{
            fontSize: hp('2%')
          }}
        />
        <TitleSectionComponent title='Color' />
        <SimpleGalleryComponent
          data={[
            { image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' },
            { image: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg' },
            { image: 'https://newcastlebeach.org/images/man-picture.jpg' },
            { image: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg' },
            { image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' },
            { image: 'http://i1.wp.com/johnlewisglass.com/wp-content/uploads/2016/04/8-1.png?w=640' }
          ]}
        />
        <TitleSectionComponent title='Size' />
        <SimpleGalleryComponent
          data={[
            { image: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg' },
            { image: 'https://newcastlebeach.org/images/man-picture.jpg' },
            { image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' },
            { image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' },
            { image: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg' },
            { image: 'http://i1.wp.com/johnlewisglass.com/wp-content/uploads/2016/04/8-1.png?w=640' }
          ]}
        />
        <TitleSectionComponent title='Description' />
        <Text style={{ textAlign: 'justify', fontSize: 10, marginHorizontal: wp('2.5%') }}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
        </Text>
        <ButtonComponent
          title='Add to cart'
          styleContainer={{
            marginTop: wp('3%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <ButtonComponent
          title='Buy now'
          styleContainer={{
            marginTop: wp('1%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <TitleSectionComponent title='Customer also buy' />
        <SlideItemComponent
          data={[
            {
              image: 'http://i1.wp.com/johnlewisglass.com/wp-content/uploads/2016/04/8-1.png?w=640',
              brand: 'Ford',
              price: '9876.54'
            },
            {
              image: 'https://i.pinimg.com/originals/b0/b8/21/b0b821853ad3de7e3a4c957817ba5a2d.jpg',
              brand: 'Losas',
              price: '9876.54'
            }
          ]}
        />
        <TitleSectionComponent title='Last viewed' />
      </ScrollView>
    )
  }
}

export default DetailItemScreen
