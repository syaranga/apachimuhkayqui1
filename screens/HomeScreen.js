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
            { image: 'https://www.vanidades.com/wp-content/uploads/2018/06/Las-fotos-m%C3%A1s-sexys-de-Zac-Efron-en-Dub%C3%A1i.jpg' },
            { image: 'https://i.pinimg.com/originals/ba/5f/99/ba5f995e33488d4123e89d63c4373ec9.jpg' },
            { image: 'https://i.pinimg.com/originals/ba/5f/99/ba5f995e33488d4123e89d63c4373ec9.jpg' },
            { image: 'https://i.pinimg.com/originals/ba/5f/99/ba5f995e33488d4123e89d63c4373ec9.jpg' },
            { image: 'https://i.pinimg.com/originals/ba/5f/99/ba5f995e33488d4123e89d63c4373ec9.jpg' }
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
            { image: 'https://i.pinimg.com/originals/ee/32/2d/ee322d9dce910a5110c7d4a8c78e9159.jpg' },
            { image: 'https://i.pinimg.com/originals/a3/ac/f9/a3acf95ac8c2735e818b9c5a149b0a94.jpg' },
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
            { image: 'https://image.freepik.com/foto-gratis/mujer-hermosa-natural_105413-1398.jpg' },
            { image: 'https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg' },
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
            { image: 'https://image.freepik.com/foto-gratis/personas-que-sonrie-alegre-hombres-guapos_1187-6057.jpg' },
            { image: 'https://img.blogs.es/anexom/wp-content/uploads/2018/12/42707058715_61bbdc578f_k.jpg' },
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
      </ScrollView>
    )
  }
}

export default HomeScreen
