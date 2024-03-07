import React from 'react';
import { View, StyleSheet } from 'react-native';
import GetCharacterCard from "../../components/getCharacterCard/getCharacterCard";

interface MarvelCharacter {
    id: number;
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

interface DisplayCharacterListProps {
    marvelCharacters: MarvelCharacter[];
}

const DisplayCharacterList: React.FC<DisplayCharacterListProps> = ({ marvelCharacters }) => {
    return (
        <View style={styles.cardsContainer}>
            {marvelCharacters.map((character, index) => (
                (character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
                    <GetCharacterCard key={index} character={character} />
                )
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default DisplayCharacterList;
