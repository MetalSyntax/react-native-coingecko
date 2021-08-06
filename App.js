import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinHome from './components/CoinHome';
import CoinPage from './components/CoinPage'; 

const Stack = createNativeStackNavigator();

const linking = {
  config
};
const config = {
  screens: {
    Home: {
      name: 'Home',
      path: '/'
    },
    Pages: {
      name: 'Pages',
      path: '/:id'
    },
    NotFound: '*',
  },
};

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#1a1a1a' } }} >
        <Stack.Screen name="Home" component={CoinHome} />
        <Stack.Screen name="Pages" component={CoinPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;