import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const coinItem = ({coin}) => {
    
    return (
        <View style={styles.containerItem}>
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
                        {coin.symbol}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={styles.textPrice}> 
                    {coin.current_price}
                </Text>
                <Text style={[
                    styles.pricePercentage, 
                    coin.price_change_percentage_24h > 0 
                    ? styles.priceUp 
                    : styles.priceDown 
                ]}> 
                    {coin.price_change_percentage_24h}
                </Text>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerNames: {
        marginLeft: 10,
    },
    coinName: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 35,
        height: 35,
    },
    textCoin: {
        color: 'darkgray',
        fontSize: 16,
    },
    textPrice: {
        color: 'darkgray'
    },
    textSymbol: {
        color: "#434343"
    },
    pricePercentage: {
        textAlign: 'right',
    },
    textPrice: {
        color: 'white',
        textAlign: 'right'
    },
    priceUp: {
        color: "green"
    },
    priceDown: {
        color: "red"
    }
});

export default coinItem
