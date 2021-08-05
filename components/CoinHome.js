import React, { useEffect, useState } from 'react'
import { View, Text ,FlatList, StyleSheet, TextInput, StatusBar, SafeAreaView } from 'react-native'
import CoinItem from './CoinItem'

const CoinHome = () => {

  const[coins, setCoins] = useState([])
  const[search, setSearch] = useState('')
  const[refreshing, setRefresh] = useState(false)
  
  const loadData = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await res.json()
    setCoins(data)
  }
  
  useEffect(() => {
    loadData()
  },[]);

    return (
    <View style={styles.container}>   
        <StatusBar backgroundColor="#1a1a1a"/>
        <SafeAreaView backgroundColor="#1a1a1a"/>
            <View style={styles.header}>
                <Text style={styles.title}>CrytoMarket</Text>
                <TextInput 
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#a1a1a1"
                onChangeText={(text) => setSearch(text)}
                />
            </View> 
            <FlatList 
                style={styles.list}
                data={coins.filter(
                (coin) => 
                    coin.name.toLowerCase().includes(search.toLowerCase()) ||
                    coin.symbol.toLowerCase().includes(search.toLowerCase())
                )}
                renderItem={
                ({item}) => {
                    return <CoinItem coin={item}/>
                }
                }
                showsVerticalScrollIndicator={false}
                refreshing={refreshing}
                onRefresh={
                async() => {
                    setRefresh(true)
                    await loadData()
                    setRefresh(false)
                }
                }
            />
        <SafeAreaView backgroundColor="#1a1a1a"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    flex: 1
  },
  title: {
    color: "whitesmoke",
    marginTop: 20,
    fontSize: 20
  },
  list: {
    width:"100%"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10
  },
  searchInput: {
    color: "whitesmoke",
    borderBottomColor: "whitesmoke",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center"
  }
})

export default CoinHome