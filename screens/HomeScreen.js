import React, { Component } from 'react'
import { StatusBar, Text, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SwiperComponent from '../components/SwiperComponent'
import TitleComponent from '../components/TitleComponent'
import GalleryComponent from '../components/GalleryComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
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
          data={[
            { text: 'a', image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg' },
            { text: 'b', image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg' },
            { text: 'c', image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg' }
          ]}
          styleContainer={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            backgroundColor: 'cyan'
          }}
        />
        <GalleryComponent
          data={[
            { text: 'a', image: 'https://s3-alpha-sig.figma.com/img/82bb/8f20/d24ce49c7d3d0d87b079a49a32babbca?Expires=1596412800&Signature=OoKdrk1XGv9IOuNYghG9pch81sFmC05-R3SY10OYwV~LudG~Nlv1K0A3CxVJ-yODcI2uecsLiiiFaC-xXNLll-THxvnXa19eqpks9Q6ecx7c3dtKlkQsXYgQCNnzOvOkBD9KvVvZj4r0WvtdoCMxPFQOi-gSG5zdtd~hzOB9Q5C2mGnt-nyX43dLf~-SwCV94j-r5p4cG3XePwY1yuBKqi0OfB3tK8ekHmF3vgFTwavtoseKOoOkl7QpkbxbjaESUatsiY1LDkjgQTwQcEC9mCkoT0920eMfXgR2sc7aiWMx2fzd82vBdRMO2l8cV1ZKk97gunNo9gBkI~i1~BZNtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
            { text: 'b', image: 'https://s3-alpha-sig.figma.com/img/70a7/639b/cf713fda36d3a58c6f0b94aa98773e2c?Expires=1596412800&Signature=AeC4853n0D1iMgKDWIjwcxLsrzYT~SyfAZC7-K3VmjrkGuDtfGfBBHoJ9aYdLM~bENYnN3tOj8jvBWiC11hRXwVcBWcfdskIea~c2tl4xw-VrVAXn7m7iJuRQ8rGUWO3X0yVpwqdy33JMwRu2wFYzURH5jVKBM9GHegUf1lCOw8ZAC1~ma9x0Ot10uEcLKRFj8lQ6n2-yxfqXkD2sY4sjV6NWwPWoazMLdyHeK-0dljMdY6J60r5LPjYhwRhMSwpySe7EVpsF84SK6zaBCABrLGrELBnG55IBH7O2DnrzDATGOHbvI~ksMqP5qvMfR-BZp8OGswYQI-hTyaEGyBIEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
            { text: 'c', image: 'https://s3-alpha-sig.figma.com/img/d4ac/3809/458a28c9495fca5e1ebdc0c5b128a7cf?Expires=1596412800&Signature=gJUlW7kqGfIkpkqFsBYK4qVjylYLGixuvPQccI9nTC0E3impYR1hfIuQ7a9vOgF4TXvlH60WkJkMVcMrGNNmerIAdzuRCHmAp7gtPO4LIyodquXH4jsmRhga~0DJ43CSsXSe0MHq~MvxV~WFg44SX~HTqrkuZhrJOmW~eoAD3wWn9e6bx4KwvbowV9InRoarQV8W2jdy1X-uX1DOpjPP5cVVP3~Emp~QLtaH~SolMcBt-vqqeUW0kc0d1lS87d2znKl6IoEI8v8wYUDpZikpRhQdWEwfLE-8Id-K9N1VaLO5FS4RIxIuRpwCQtB9XxBqAAjhjbnyMYm9r179vf-D2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
            { text: 'c', image: 'https://s3-alpha-sig.figma.com/img/b152/8536/8e769651b712805a9bef750622f70715?Expires=1596412800&Signature=RAUWjjocgZdKAQKIiCov5PZQDBMdk2vYc1l9WOyIZcWrlp1SB6OGzvGQrwD37AqJ1SZk5pK~-upVH2cVOxccCH2AReKlhTR4wPKfzUdlhwcVY23SUyN6d-wZFuKyMJG-KmMnYEe-q1ve3bLQkp2nLb4Wq659SurVUMoDky35Br4stRg0S3xyPvDAeXdxGcxG0xTy92qbny7hFYu8jWTSvhQmji4qEL3bg0F8ErROKLLfAeqANXU36km74AD~koTGhAxVQImPM~y-el7nNtzl07lm931FGKfi~nOd8uIieUUtwNqSJzde8WkTy-RUqCfFN7hsd~GwBQC7vnM06NBFoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }

          ]}
          styleContainer={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            marginTop: 10,
            marginBottom:10
          }}
        />

        <Text>HomeScreen</Text>
      </ScrollView>
    )
  }
}

export default HomeScreen
