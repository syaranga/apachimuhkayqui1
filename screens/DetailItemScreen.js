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
              image: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-K93bZY0t.jpg',
              brand: 'CALEFACTOR ELÉCTRICO',
              model: '1800W',
              original_price: '35.9',
              price: '59.00'
            },
            {
              image: 'https://plazavea.vteximg.com.br/arquivos/ids/417581-1000-1000/20198081.jpg',
              brand: 'BLACKLINE',
              model: 'HB-206C',
              original_price: '179.90',
              price: '199.90'
            },
            {
              image: 'https://plazavea.vteximg.com.br/arquivos/ids/245916-1000-1000/image-3c5fb44c1338446795c2c80eedf162ef.jpg',
              brand: 'Treadmill',
              model: 'OX-0008',
              original_price: '999.00',
              price: '1,199.00'
            },
            {
              image: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CWDQQL6GUIJMS/ProductCatalog.CYKNCR4FRG6MQ/1500x1500/CYKSKLHMRCYO2.jpg',
              brand: 'Tommy Hilfiger',
              model: '1791579',
              original_price: '529.00',
              price: '1299.00'
            },
            {
              image: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-JuIPVRfJ.jpg',
              brand: 'ASPIRADORA ROBOT',
              model: 'STRIKER 2.0',
              original_price: '429.00',
              price: '599.00'
            },
            {
              image: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-wu3bS3kz.jpg',
              brand: 'BICICLETA ELECTRICA',
              model: 'ROBSTEP',
              original_price: '1,999.00',
              price: '2,599'
            }
          ]}
        />
        <TitleSectionComponent title='Last viewed' />
      </ScrollView>
    )
  }
}

export default DetailItemScreen
