import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';
import gameAPI from "../../gameAPI";

const GameShowScreen = ({ route }) => {

    const [game, setGame] = useState(null)

    const id = route.params.id; 

    const getGame = async (id) => {
       const response = await gameAPI.get(`/search?ids=${id}`, {
           params: {
               client_id: 'lK9Pf5uKKr',
           }
       });
        setGame(response.data.games[0])
    };

    useEffect(() => {
        getGame(id);
    }, []);

    if (!game) {
        return null;
    }

    const loadInBrowser = () => {
        if(game.official_url) {
            Linking.openURL(game.official_url).catch(err => console.error("Couldn't load page", err));
        } else {
            Linking.openURL(game.url).catch(err => console.error("Couldn't load page", err));
        }
      };

   
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>{game.handle}</Text>
            <Image style={styles.image} source={{ uri: game.images.medium }}/>
            <Text style={styles.description}>{game.description_preview}</Text>
            <TouchableOpacity onPress={() => {loadInBrowser()}}>
                <Text style={styles.website}>Official Website</Text>
                </TouchableOpacity>    
        </View>
        </ScrollView> 
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 275,
        height: 350,
        borderRadius: 4,
        marginBottom: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'capitalize',
    },
    description: {
        marginLeft: 10,
        marginRight: 10,
    },
    website: {
        marginTop: 10,
        fontSize: 16,
        color: 'blue'
    }
});


export default GameShowScreen;