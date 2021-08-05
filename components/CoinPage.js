import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CoinPage = ({coin}) => {
    return (
        <View style={styles.containerPage}>
            <Text style={styles.coinName}>{coin.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPage: {
        flex: 1
    },
    coinName: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default CoinPage
