import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useGetAllCharacters from '../../services/getAllCharacters/useGetAllCharacters';
import DisplayCharacterList from "../../components/displayCharactersList/displayCharacterList";


const Home = () => {
    const { marvelCharacters, loading } = useGetAllCharacters();

    return (
        <ScrollView>
            <View style={styles.container}>
                {loading ? (
                    <Text>Chargement...</Text>
                ) : (
                    <DisplayCharacterList marvelCharacters={marvelCharacters} />
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;
