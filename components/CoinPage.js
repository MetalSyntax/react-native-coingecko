import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StatusBar, SafeAreaView, View, Text, StyleSheet, Image } from 'react-native'

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
            <View style={styles.moduleMain}>
                <Text style={styles.textPrice}>
                    $  
                </Text>
                <Text style={styles.textDate}>
                    {new Date(coin.last_updated).toUTCString()}
                </Text>
            </View>
            <View style={styles.moduleName}>
                <Image 
                    style={styles.imageCoin} 
                    source={'https://via.placeholder.com/50'}
                />
                <Text style={styles.textName}>
                    {coin.name}
                </Text>
            </View>
            <View style={styles.modulePrice}>
                <Text style={styles.textTitle}>
                        PRICE
                </Text>
            </View>
            <View style={styles.moduleChange}>
                <Text style={styles.textTitle}>
                        % CHANGE
                </Text>
            </View>
            <View style={styles.moduleMarket}>
                <Text style={styles.textTitle}>
                        MARKET
                </Text>
            </View>
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
        //height: 'calc(100vh - 43px)'
    },
    moduleMain: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '95%'
    },
    modulePrice: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '95%'
    },
    textPrice: {
        fontSize: 40,
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
        width: '95%'
    },
    textName: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        width: '80%'
    },
    imageCoin: {
        width: 40,
        height: 40
    },
    textTitle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    moduleChange: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '95%',
        marginTop: 10,
        marginBottom: 10
    },
    moduleMarket: {
        backgroundColor: '#2F2F2F',
        padding: 10,
        borderRadius: 10,
        width: '95%',
        marginBottom: 10
    }
})

export default CoinPage
