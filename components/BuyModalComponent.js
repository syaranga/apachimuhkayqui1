import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from './TitleComponent'
import GalleryComponent from './GalleryComponent'

export class BuyModalComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  componentDidMount () {
    this.setState({ isVisible: this.props.visible })
  }

  componentDidUpdate (prevProps) {
    if (this.props.visible !== prevProps.visible) {
      this.setState({ isVisible: this.props.visible })
    }
  }

  render () {
    if (this.state.isVisible) {
      return (
        <View style={{ position: 'absolute', zIndex: 50, elevation: 50 }}>
          <Modal
            isVisible={this.state.isVisible}
            style={{ backgroundColor: 'white', width: wp('90%'), height: hp('80%'), marginHorizontal: wp('5%'), borderRadius: wp('5%') }}
            onBackdropPress={() => this.setState({ isVisible: false })}
          >
            <View style={{ flex: 1 }}>
              <TitleComponent
                title='Buy'
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
            </View>
          </Modal>
        </View>
      )
    }
    return null
  }
}

export default BuyModalComponent
