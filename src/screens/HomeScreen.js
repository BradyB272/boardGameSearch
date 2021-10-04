import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import SearchBar from '../../components/SearchBar';

const HomeScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
   
    return (
        
        <View style={{ flex: 1 }}> 
            <ImageBackground 
            style={styles.backGroundImage} 
            source={require('./11.png')} 
            resizeMode='cover'
            > 
            <View style={styles.contentContainer}>
            <Text style={styles.title}>Search for popular board games! Or click to show most popular games!</Text>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => {setTerm(newTerm)}}
            onTermSubmit={() => {navigation.navigate('Search', {search: term})}}
            />
            <TouchableOpacity
            style={styles.button}
            onPress={() => {navigation.navigate('Popular')}}>
                <Text style={styles.buttontext}>Show Most Popular Board Games</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            
      </View>
      
    )
    
};

const styles = StyleSheet.create({
    contentContainer: {
        height: 400,
        justifyContent: 'space-between'
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
    },
    button: {
        elevation: 8,
        backgroundColor: "#FFED9F",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginHorizontal: 15,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'black'
    }, 
    buttontext: {
        alignSelf: 'center',
        fontWeight: 'bold'
    }
});

export default HomeScreen;