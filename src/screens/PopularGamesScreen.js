import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import gameAPI from '../../gameAPI';
import GameList from '../../components/GameList';


const PopularGamesScreen = ({ navigation }) => {
    const [popGames, setpopGames] = useState([]);
 

const getResult = async () => {
    const response = await gameAPI.get('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=lK9Pf5uKKr');
    setpopGames(response.data.games);
  };

  useEffect(()=> {
    getResult();

}, []);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground 
            style={styles.backGroundImage} 
            source={require('./11.png')} 
            resizeMode='cover'
            >
            <View style={styles.contentContainer}>
            <Text style={styles.title}>Scroll Through the Most Popular Board Games!</Text>
            <GameList navigation={navigation} results={popGames} />
            </View>
            </ImageBackground>
      </View>
      
    )
};

const styles = StyleSheet.create({
    contentContainer: {
        height: 550,
        justifyContent: 'space-between',
        marginBottom: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    backGroundImage: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default PopularGamesScreen;