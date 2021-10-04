import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GameDetail from "./GameDetail";
import Carousel from 'react-native-snap-carousel';


const GameList = ({ title, results, navigation, number }) => {
    
    if (!results.length) {
        return null;
    }

    renderItem=( {item} ) => (
        <TouchableOpacity onPress={() => {navigation.navigate('Game', {id: item.id})}}>
        <GameDetail game={item} />
        </TouchableOpacity>
     );

    return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        
        {number? <Text>Number of Games: {number}</Text> : null}  

        <Carousel
            layout={'default'}
              data={results}
                renderItem={renderItem}
              sliderWidth={290}
              itemWidth={290}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 32,
        flex: 1,
        alignItems: 'center',
    }
});

export default GameList;