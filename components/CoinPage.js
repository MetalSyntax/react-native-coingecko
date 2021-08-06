import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StatusBar, SafeAreaView, View, Text, StyleSheet } from 'react-native'

const CoinPage = ({ navigation, route }) => {
    const coinId = route.params.id
    
    const[coin, setCoin] = useState([])
    
    const loadData = async () => {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        const data = await res.json()
        setCoin(data)
        console.log(data)
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
        <View >
            <Text ></Text>
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
        width: '90%',
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
    }
})

export default CoinPage
