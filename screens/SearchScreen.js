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
              width: hp('.3%'),
              height: hp('.3%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />
        <GridComponent
          data={[
            {
              image: 'https://i.ytimg.com/vi/dQMI4ClMqkQ/maxresdefault.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://wpcluster.dctdigital.com/inspiralist/wp-content/uploads/sites/106/2019/05/dogs-1-940x705.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://fsmedia.imgix.net/93/eb/4e/ce/675b/404e/89a5/8952baabb731/lucrezia-carnelos-1344974-unsplashjpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=600&w=1200',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://doctorvet.it/wp-content/uploads/2019/09/respirazione-artificiale-per-cani-2880x1800.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://dogperday.com/wp-content/uploads/2019/10/article3-1.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'http://www.estetclassic.com/wp-content/uploads/2020/06/boris1.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://i.ytimg.com/vi/dQMI4ClMqkQ/maxresdefault.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://wpcluster.dctdigital.com/inspiralist/wp-content/uploads/sites/106/2019/05/dogs-1-940x705.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://fsmedia.imgix.net/93/eb/4e/ce/675b/404e/89a5/8952baabb731/lucrezia-carnelos-1344974-unsplashjpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=600&w=1200',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://doctorvet.it/wp-content/uploads/2019/09/respirazione-artificiale-per-cani-2880x1800.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://dogperday.com/wp-content/uploads/2019/10/article3-1.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'http://www.estetclassic.com/wp-content/uploads/2020/06/boris1.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://i.ytimg.com/vi/dQMI4ClMqkQ/maxresdefault.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://wpcluster.dctdigital.com/inspiralist/wp-content/uploads/sites/106/2019/05/dogs-1-940x705.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://fsmedia.imgix.net/93/eb/4e/ce/675b/404e/89a5/8952baabb731/lucrezia-carnelos-1344974-unsplashjpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=600&w=1200',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://doctorvet.it/wp-content/uploads/2019/09/respirazione-artificiale-per-cani-2880x1800.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://dogperday.com/wp-content/uploads/2019/10/article3-1.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'http://www.estetclassic.com/wp-content/uploads/2020/06/boris1.jpg',
              discount: '70%',
              price: '$9999'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('30%'),
            justifyContent: 'flex-end',
            borderRadius: wp('2%'),
            padding: wp('.5%')
          }}
          styleText={{
            flexDirection: 'row',
            justifyContent: 'space-Between',
            backgroundColor: '#d3d3d3'
          }}
          styleDiscont={{
            color: 'red',
            fontSize: hp('3%')
          }}

        />
      </ScrollView>
    )
  }
}

export default SearchScreen
