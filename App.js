import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinHome from './components/CoinHome';
import CoinPage from './components/CoinPage'; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={CoinHome} />
        <Stack.Screen name="Pages" component={CoinPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;