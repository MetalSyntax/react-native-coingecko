import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'

const coinItem = ({coin}) => {
    return (
        <View style={[styles.containerItem, coin.market_cap_rank%2 === 0 ? styles.isEven
            : styles.isOdd]}>
            <View style={styles.coinName}>
                <Image 
                    style={styles.image} 
                    source={{uri: coin.image}} 
                />
                <View style={styles.containerNames}>
                    <Text style={styles.textCoin}> 
                        {coin.name} 
                    </Text>
                    <Text style={styles.textSymbol}>
                        {coin.market_cap_rank}. {coin.symbol.toUpperCase()}
                    </Text>
                </View>
            </View>
            <View style={styles.containerPrices}>
                <Text style={styles.textPrice}> 
                    {coin.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
                <Text style={[
                    styles.pricePercentage, 
                    coin.price_change_percentage_24h > 0 
                    ? styles.priceUp 
                    : styles.priceDown 
                ]}> 
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    isEven: {
        backgroundColor: "#1a1a1a"
    },
    isOdd: {
        backgroundColor: "#141414"
    },
    containerNames: {
        marginLeft: 10
    },
    containerPrices: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    coinName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    image: {
        width: 35,
        height: 35
    },
    textCoin: {
        color: 'lightgray',
        fontSize: 16
    },
    textPrice: {
        color: 'lightgray',
        textAlign: 'right'
    },
    textSymbol: {
        color: "#727272"
    },
    pricePercentage: {
        textAlign: 'right',
        paddingLeft: 50,
        paddingRight: 10
    },
    priceUp: {
        color: "#008000"
    },
    priceDown: {
        color: "#ff3333"
    }
});

export default coinItem
