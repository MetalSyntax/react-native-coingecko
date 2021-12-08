import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StatusBar, SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from 'react-native'

const CoinPage = ({ navigation, route }) => {
    const coinId = route.params.id

    const[coin, setCoin] = useState([])

    const loadData = async () => {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        const data = await res.json()
        setCoin(data)
    }

    useEffect(() => {
        loadData()
    },[]);

    return (
    <View style={styles.containerPage}>
        <StatusBar backgroundColor="#1a1a1a"/>
        <SafeAreaView backgroundColor="#1a1a1a"/>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack() }>
            <View style={styles.header}>
                <Text style={styles.coinName}>{coin.name}</Text>
            </View> 
        </TouchableOpacity>
        <View style={styles.containerContent}>
            <ScrollView>
                <View style={styles.moduleMain}>
                    { typeof coin.market_data !== 'undefined' ?
                    <Text style={styles.textPrice}>
                        ${parseFloat(coin.market_data.current_price.usd)}
                    </Text>
                    :
                    <Text style={styles.textPrice}>
                        $ N/A
                    </Text>
                    }
                    <Text style={styles.textDate}>
                        {new Date(coin.last_updated).toUTCString()}
                    </Text>
                </View>
                <View style={styles.moduleName}>
                    { typeof coin.image !== 'undefined' ?
                    <Image 
                        style={styles.imageCoin} 
                        source={{uri: coin.image.small}}
                    />
                    :
                    <Image 
                        style={styles.imageCoin} 
                        source={{uri: 'https://via.placeholder.com/50'}}
                    />
                    }  
                    <Text style={styles.textName}>
                        {coin.name}
                    </Text>
                </View>
                <View style={styles.modulePrice}>
                    <Text style={styles.textTitle}>
                        PRICE
                    </Text>
                    { typeof coin.market_data !== 'undefined' ?
                    <View>
                        <Text style={styles.textUSD}>
                            USD {coin.market_data.current_price.usd}
                        </Text>
                        <Text style={styles.textBTC}>
                            BTC {coin.market_data.current_price.btc}
                        </Text>
                    </View>
                    :
                    <View>
                        <Text style={styles.textUSD}>
                            USD N/A
                        </Text>
                        <Text style={styles.textBTC}>
                            BTC N/A
                        </Text>
                    </View>
                    }
                </View>
                <View style={styles.moduleChange}>
                    <Text style={styles.textTitle}>
                            % CHANGE
                    </Text>
                    { typeof coin.market_data !== 'undefined' ?
                    <View>
                        <Text style={[styles.pricePercentage, 
                            coin.market_data.price_change_percentage_24h > 0 
                            ? styles.priceUp 
                            : styles.priceDown ]}>
                            24H {coin.market_data.price_change_percentage_24h_in_currency.usd}
                        </Text>
                        <Text style={[styles.pricePercentage, 
                            coin.market_data.price_change_percentage_7d > 0 
                            ? styles.priceUp 
                            : styles.priceDown ]}>
                            7D {coin.market_data.price_change_percentage_7d_in_currency.usd}
                        </Text>
                        <Text style={[styles.pricePercentage, 
                        coin.market_data.price_change_percentage_30d > 0 
                            ? styles.priceUp 
                            : styles.priceDown ]}>
                            30D {coin.market_data.price_change_percentage_30d_in_currency.usd}
                        </Text>
                    </View>
                    :
                    <View>
                        <Text style={styles.pricePercentage}>
                            24H N/A
                        </Text>
                        <Text style={styles.pricePercentage}>
                            7D N/A
                        </Text>
                        <Text style={styles.pricePercentage}>
                            30D N/A
                        </Text>
                    </View>}
                </View>
                <View style={styles.moduleMarket}>
                    <Text style={styles.textTitle}>
                            MARKET
                    </Text>
                    <Text style={styles.textRank}>
                        Rank: {coin.market_cap_rank}
                    </Text>
                    {typeof coin.market_data !== 'undefined' ?
                    <Text style={styles.textCap}>
                        Cap: ${coin.market_data.market_cap.usd.toLocaleString('en')}
                    </Text>
                    :
                    <Text style={styles.textCap}>
                        Cap: N/A
                    </Text>}
                </View>
                <View style={styles.moduleSupply}>
                    <Text style={styles.textTitle}>
                            SUPPLY
                    </Text>
                    {typeof coin.market_data !== 'undefined' ?
                    <View>
                    <Text style={styles.textCircu}>
                        Circulating: {coin.market_data.circulating_supply.toLocaleString('en')}
                    </Text>
                    <Text style={styles.textMax}>
                        Max: {coin.market_data.total_supply == null ? "Null value" : coin.market_data.total_supply.toLocaleString('en')}
                    </Text>
                    </View>
                    :
                    <View>
                        <Text style={styles.textCircu}>
                            Circulating: N/A
                        </Text>
                        <Text style={styles.textMax}>
                            Max: $ N/A
                        </Text>
                    </View>}
                </View>
            </ScrollView>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    containerPage: {
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        flex: 1
    },
    back: {
        width: '90%'
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10
    },
    coinName: {
        fontSize: 20,
        textAlign: 'left',
        color: 'white'
    },
    containerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '90%'
        //height: 'calc(100vh - 43px)'
    },
    moduleMain: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '100%'
    },
    modulePrice: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '100%'
    },
    textPrice: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    textDate: {
        fontSize: 20,
        color: '#989898',
        textAlign: 'center'
    },
    moduleName: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: '100%'
    },
    textName: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        width: '80%',
        marginLeft: 10
    },
    imageCoin: {
        width: 40,
        height: 40
    },
    textTitle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    textUSD: {
        fontSize: 16,
        color: '#C1C1C1',
        textAlign: 'center'
    },
    textBTC: {
        fontSize: 16,
        color: '#C1C1C1',
        textAlign: 'center'
    },
    moduleChange: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    moduleMarket: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        marginBottom: 10
    },
    priceUp: {
        color: "#008000"
    },
    priceDown: {
        color: "#ff3333"
    },
    pricePercentage: {
        fontSize: 16,
        color: '#C1C1C1',
        textAlign: 'center'
    },
    moduleSupply: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        marginBottom: 10
    },
    textRank: {
        fontSize: 16,
        color: '#C1C1C1',
        textAlign: 'center'
    },
    textCap: {
        fontSize: 16,
        color: '#C1C1C1',
        textAlign: 'center'
    },
    textVol: {
        fontSize: 16,
        color: '#C1C1C1',
        textAlign: 'center'
    },
    textCircu: {
        fontSize: 16,
        color: '#C1C1C1',
        textAlign: 'center'
    },
    textMax: {
        fontSize: 16,
        color: '#C1C1C1',
        textAlign: 'center'
    }
})

export default CoinPage
