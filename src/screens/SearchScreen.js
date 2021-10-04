import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar';
import useGamesHook from './hooks/useGamesHook';
import GameList from '../../components/GameList';


const SearchScreen = ({ navigation, route }) => {

    const initialSearch = route.params.search;

    const [term, setTerm] = useState(initialSearch);

    const [searchApi, games, errorMes] = useGamesHook();

    useEffect(()=> {
        searchApi(term)
    }, []);

    const filterGameByRating = (rating) => {
        // rating === 0-1, 1-2...4-5
        return games.filter((game) => {
            return Math.floor(game.average_user_rating) === rating;
        })
    }
    
    return (

        <View style={{ flex: 1 }}>
            
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => {setTerm(newTerm)}}
            onTermSubmit={() => {searchApi(term)}}
            />
            
        {errorMes? <Text>{errorMes}</Text> : null}  

        <ScrollView>
        <GameList  navigation={navigation} number={filterGameByRating(4).length} results={filterGameByRating(4)} title='Best Rated Games'/> 
        <GameList  navigation={navigation} number={filterGameByRating(3).length} results={filterGameByRating(3)} title='Good Rated Games'/>
        <GameList  navigation={navigation} number={filterGameByRating(2).length} results={filterGameByRating(2)} title='Low Rated Games' />
        <GameList navigation={navigation} number={filterGameByRating(1).length} results={filterGameByRating(1)} title='Bad Rated Games' />
        </ScrollView>

      </View>
      
    )
};

const styles = StyleSheet.create({})


export default SearchScreen;