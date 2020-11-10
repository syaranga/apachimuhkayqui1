
import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SwiperComponent from '../components/SwiperComponent'
import TitleComponent from '../components/TitleComponent'
import GalleryComponent from '../components/GalleryComponent'
import TitleSectionComponent from '../components/TitleSectionComponent'
import CategoriesComponent from '../components/CategoriesComponent'
import SlideItemComponent from '../components/SlideItemComponent'
import MatchComponent from '../components/MatchComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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
          autoplay
          loop
          data={[
            { image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg' },
            { image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg' },
            { image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg' }
          ]}
          styleContainer={{
            height: hp('50%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
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
        <TitleSectionComponent
          title='Categories to you'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <CategoriesComponent
          data={[
            { name: 'Mens', image: 'https://www.sanctuarysalondayspa.com/wp-content/uploads/2019/08/06-2.jpg' },
            { name: 'Women', image: 'https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg' },
            { name: 'Boy', image: 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/boy.jpg' },
            { name: 'Girl', image: 'https://www.girlsinthegame.org/wp-content/uploads/2019/09/Home-Page-Banner-aspect-ratio-385x470.jpg' },
            { name: 'Baby', image: 'https://website-bamedag.netdna-ssl.com/fileadmin/media/_processed_/0/e/csm_2Versuch_hohe_Aufloesung_Perfect_0__Caucasian_3c11a78869.jpg' },
            { name: 'Offer', image: 'https://cdnmedia.triathlon.com.pe/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/base/F36218.jpg' }
          ]}
          styleSlide={{
            paddingHorizontal: wp('2.5%')
          }}
          styleCategoryImage={{
            height: hp('7%'),
            width: hp('7%'),
            borderRadius: hp('7%')
          }}
        />
        <CategoriesComponent
          data={[
            { name: 'Novelty', image: 'https://avatarfiles.alphacoders.com/245/245940.jpg' },
            { name: 'Home', image: 'https://avatarfiles.alphacoders.com/245/245940.jpg' },
            { name: 'Beauty', image: 'https://avatarfiles.alphacoders.com/245/245940.jpg' },
            { name: 'Food', image: 'https://avatarfiles.alphacoders.com/245/245940.jpg' },
            { name: 'Hygiene', image: 'https://avatarfiles.alphacoders.com/245/245940.jpg' }
          ]}
          styleSlide={{
            paddingHorizontal: wp('2.5%')
          }}
          styleCategoryImage={{
            height: hp('7%'),
            width: hp('7%'),
            borderRadius: hp('7%')
          }}
        />
        <TitleSectionComponent
          title='Top selected to you'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <SlideItemComponent
          data={[
            { image: 'https://i.pinimg.com/originals/4d/93/22/4d9322d88e47f82fd273dbb970b5e9fd.jpg' },
            { image: 'https://i.pinimg.com/originals/9f/b8/c4/9fb8c407c053bb4c5609f57391510777.jpg' },
            { image: 'https://i.pinimg.com/originals/9d/61/df/9d61df788c51f6361e2a3e4e4cbe702e.jpg' },
            { image: 'https://i.pinimg.com/originals/98/77/fd/9877fd030126f53ed0b867eaf0c15774.jpg' }
          ]}
          styleSlide={{
            paddingHorizontal: wp('2.5%')
          }}
          styleCategoryImage={{
            height: hp('32%'),
            width: hp('26.2%')
          }}
        />
        <TitleSectionComponent
          title='Top Favorite'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <SlideItemComponent
          data={[
            { image: 'https://i.pinimg.com/originals/37/d5/f0/37d5f080a6c38df678cf06941e31523f.jpg' },
            { image: 'https://lookandfashion-static.hola.com//viviana-gonzalez-de-marco/files/2016/10/distinci%C3%B3n-1.jpg' },
            { texto: 'Metal Earrings  $/. 4444.5' }
          ]}
          styleSlide={{
            paddingHorizontal: wp('2.5%')
          }}
          styleCategoryImage={{
            height: hp('32%'),
            width: hp('26.2%')
          }}
        />
        <TitleSectionComponent
          title='Top Adquiered'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <SlideItemComponent
          data={[
            { image: 'https://sc01.alicdn.com/kf/UTB80TSDF3QydeJk43PUq6AyQpXaq.jpg_350x350.jpg' },
            { image: 'https://thumbs.dreamstime.com/b/retrato-del-hombre-elegante-hermoso-en-traje-elegante-64520733.jpg' },
            { texto: 'Metal Earrings  $/. 4444.5' }
          ]}
          styleSlide={{
            paddingHorizontal: wp('2.5%')
          }}
          styleCategoryImage={{
            height: hp('32%'),
            width: hp('26.2%')
          }}
        />
        <TitleSectionComponent
          title='Top Most Viewed'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <SlideItemComponent
          data={[
            { image: 'https://i.linio.com/p/21494828d203ed1327ac985b4eb462a4-product.jpg' },
            { image: 'https://i.linio.com/p/97023656ceaebc00b26a7ecd871ea9af-zoom.jpg' },
            { texto: 'Metal Earrings  $/. 4444.5' }
          ]}
          styleSlide={{
            paddingHorizontal: wp('2.5%')
          }}
          styleCategoryImage={{
            height: hp('32%'),
            width: hp('26.2%')
          }}
        />
        <TitleSectionComponent
          title='Match youre favorite'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <MatchComponent
          data={[
            { image: 'https://www.sanctuarysalondayspa.com/wp-content/uploads/2019/08/06-2.jpg' },
            { image: 'https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg' },
            { image: 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/boy.jpg' },
            { image: 'https://www.girlsinthegame.org/wp-content/uploads/2019/09/Home-Page-Banner-aspect-ratio-385x470.jpg' }
          ]}
          styleContainer={{
            width: wp('100%'),
            height: hp('100%')
          }}
        />
        <SlideItemComponent />
      </ScrollView>
    )
  }
}

export default HomeScreen
