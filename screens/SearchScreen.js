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
              image: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CYC3VPWVK2T2U/ProductCatalog.CYSBZKMVL7GKW/1500x1500/CYSC4CM44J2AQ.jpg',
              discount: '0%',
              price: '8.5'

            }
          ]}
          itemDimension={wp('30%')}
          styleItem={{
            height: wp('30%'),
            justifyContent: 'flex-end',
            borderRadius: wp('2%'),
            padding: wp('.5%'),
            background: 'red'

          }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen
