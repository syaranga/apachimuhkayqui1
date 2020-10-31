import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'

export default class MatchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={[styles.container, this.props.styleContainer]}>
                <Swiper
                    cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                            </View>
                        )
                    }}
                    onSwiped={(cardIndex) => { console.log(cardIndex) }}
                    onSwipedAll={() => { console.log('onSwipedAll') }}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize={3}
                    >
                    <Text> 
                        You can press me
                    </Text>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF"
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "#E8E8E8",
      justifyContent: "center",
      backgroundColor: "white"
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      backgroundColor: "transparent"
    }
  });

