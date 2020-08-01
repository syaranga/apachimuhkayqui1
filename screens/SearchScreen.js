import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import GridComponent from '../components/GridComponent'

export class SearchScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent
          title='Search'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            textShadowColor: 'gray',
            textShadowOffset: {
              width: hp('.8%'),
              height: hp('.8%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />
        <GridComponent
          data={[
            {
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://ariumliving.com/sites/default/files/styles/pets_family/public/2019-11/Capture4_73.JPG?itok=ErJB32_R',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://static.wixstatic.com/media/8e068d_c50bcd71617d488ba53b8333df226b0a~mv2.png/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.png',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'http://cfp-nc.org/wp-content/uploads/2019/11/intro.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.bing.com/images/blob?bcid=Tg9YTKTN558BCg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'http://cfp-nc.org/wp-content/uploads/2019/11/intro.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.bing.com/images/blob?bcid=Tl1omSVCcJ8BrA',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://dogperday.com/wp-content/uploads/2019/10/article3-1.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CYC3VPWVK2T2U/ProductCatalog.CYSBZKMVL7GKW/1500x1500/CYSC4CM44J2AQ.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://ariumliving.com/sites/default/files/styles/pets_family/public/2019-11/Capture4_73.JPG?itok=ErJB32_R',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CYC3VPWVK2T2U/ProductCatalog.CYSBZKMVL7GKW/1500x1500/CYSC4CM44J2AQ.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://ariumliving.com/sites/default/files/styles/pets_family/public/2019-11/Capture4_73.JPG?itok=ErJB32_R',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CYC3VPWVK2T2U/ProductCatalog.CYSBZKMVL7GKW/1500x1500/CYSC4CM44J2AQ.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://ariumliving.com/sites/default/files/styles/pets_family/public/2019-11/Capture4_73.JPG?itok=ErJB32_R',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CYC3VPWVK2T2U/ProductCatalog.CYSBZKMVL7GKW/1500x1500/CYSC4CM44J2AQ.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'http://cfp-nc.org/wp-content/uploads/2019/11/intro.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CYC3VPWVK2T2U/ProductCatalog.CYSBZKMVL7GKW/1500x1500/CYSC4CM44J2AQ.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'http://cfp-nc.org/wp-content/uploads/2019/11/intro.jpg',
              discount: '70%',
              price: '$999.9'
            }

          ]}
          itemDimension={wp('30%')}
          styleItem={{
            height: wp('30%'),
            justifyContent: 'flex-end',
            borderRadius: wp('2%'),
            padding: wp('.5%'),
            backgroundColor: ''
          }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen
