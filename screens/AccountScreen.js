import React, { Component } from 'react'
import { ScrollView} from 'react-native'
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
        <AccountComponent
          data={[
            {
              image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.insidehook.com/wp-content/uploads/2020/03/dog_adoptions_coronavirus.jpg?fit=1795%2C1200',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.NlxrAImhJZuBjrE5_LyqYAAAAA?pid=Api&w=141&h=212&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Trws725tqh9vm5LNukOOrwHaE5?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.bing.com/images/blob?bcid=TtybFVvDHJsBsw',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.dDMUv2x_HRcYmfXRjHusGQAAAA?pid=Api&w=120&h=86&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.theinspirationedit.com/wp-content/uploads/2019/12/pets-and-dogs-4.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://yt3.ggpht.com/a/AATXAJz6DVTnhGcGrdXlgXo47jB8iQmuYxIVPSdBqg=s900-c-k-c0xffffffff-no-rj-mo',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cipher.dakiscdn.com/i/https://1410dd2bdd37e05ebf19-a2305060cc55ab8db83b1ef4b8835a6b.ssl.cf5.rackcdn.com/BGyo1n8Wdv6wofX6Nfro7Q?&w=400&h=400&p=1&a=1&q=render',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://im0-tub-com.yandex.net/i?id=10db8ac74c67261be0d14b6867e00743&n=13',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.bakemorepies.com/wp/avg_lineberger/uploads/2019/08/dog-desktop-1500x759-1.jpg',
              discount: '70%',
              price: '$9999'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('30%'),
            backgroundColor: 'gray'
          }}
        />
      </ScrollView>
    )
  }
}

export default AccountScreen
