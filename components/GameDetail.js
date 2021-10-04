import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const GameDetail = ({game}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: game.image_url  }}/>
            <Text style={styles.name}>{game.handle}</Text>
            <Text style={styles.rating}>Average Rating: {game.average_user_rating.toFixed(2)}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 275,
        height: 350,
        borderRadius: 4,
        marginBottom: 5,
    }, 
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'capitalize',
    },
    rating: {
        marginTop: 8,
    }
});

export default GameDetail;