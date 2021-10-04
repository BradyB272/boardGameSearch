import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (

        <View style={styles.background}>
            <Feather name='search' style={styles.iconStyle}/> 
 
            <TextInput 
            ref={input => { textInput = input }}
            autoCapitalize='none'
            autoCorrect={false}
            clearTextOnFocus={true}
            style={styles.inputStyle} 
            placeholder='Search Name of Game' 
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => {onTermSubmit(), textInput.clear()}}
            />
        </View>

    )
};



const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
        
    },
    inputStyle: {
        flex: 1,  
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center', 
        marginHorizontal: 15,
    }
});

export default SearchBar;