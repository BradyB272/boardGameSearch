import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import GameShowScreen from './src/screens/GameShowScreen';
import HomeScreen from './src/screens/HomeScreen';
import PopularGamesScreen from './src/screens/PopularGamesScreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameShowScreen} />
        <Stack.Screen name="Popular" component={PopularGamesScreen} />
      </Stack.Navigator>    
    </NavigationContainer>

  );
}

export default App; 
