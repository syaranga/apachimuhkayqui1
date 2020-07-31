import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import AccountComponent from '../components/AccountComponent'

export class AccountScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent
          title='Account'
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
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        >
          <View style={{
            backgroundColor: 'white',
            padding: '3%',
            margin: '3%',
            borderRadius: '4%',
            width: '55%'
          }}
          />
          <View style={{
            backgroundColor: 'white',
            padding: '2%',
            margin: '3%',
            borderRadius: '2%'
          }}
          >
            <FontAwesome5 name='trash-alt' size={15} color='black' />
          </View>
        </View>
        <AccountComponent
          data={[
            {
              image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://blog.nhvnaturalpetproducts.com/wp-content/uploads/2019/05/Zinc-deficiency-in-husky-dogs-768x527.png',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://wowpooch.com/wp-content/uploads/2019/05/Best-Dog-Food-For-Giant-Breeds-1024x536.jpg',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://www.petscoop.com/wp-content/uploads/2019/07/dog-dogs-sunglasses.jpg',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://gigworker.com/wp-content/uploads/2018/12/Screenshot-2018-12-13-at-5.26.56-PM-300x255.png',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://ctl.s6img.com/society6/img/VB7ei-cqNYocTz46Fzv2d0-gmPU/w_700/comforters/swatch/~artwork,fw_6000,fh_6000,fy_-1000,iw_6000,ih_8000/s6-original-art-uploads/society6/uploads/misc/b916793551af4d76babfb6876238b17a/~~/thug-pug1378163-comforters.jpg?wait=0&attempt=0',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://raleighncvet.com/wp-content/uploads/2019/07/dog-eyes-oxytocin-raleigh-vet1.jpg',
              renderFooter: this.renderFooterMansonry
            },
            {
              image: 'https://i1.wp.com/www.lifeinahouse.net/wp-content/uploads/2020/05/lucrezia-carnelos-F0if-2LD4cA-unsplash.jpg?w=1024&ssl=1'
            },
            {
              image: 'http://seagatecottage.co.uk/wp-content/uploads/2019/03/paul-thomas-1375986-unsplash-400x266.jpg'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('30%')
          }}
        />
      </ScrollView>
    )
  }
}
export default AccountScreen
