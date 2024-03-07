import React from 'react';
import useGetOneCharacter from '../../services/getOneCharacter/useGetOneCharacter';
import { View, Text, Image, StyleSheet } from 'react-native';

interface DisplayCharacterProps {
    characterId: number; // Ajout de la prop characterId
}

const GetDetailsCharacterCard: React.FC<DisplayCharacterProps> = ({ characterId }) => {

    const { marvelCharacter, loading } = useGetOneCharacter(characterId);

    console.log('GetDetailsCharacterCard : character ', marvelCharacter);

    // Vérifier si le personnage existe
    if (!marvelCharacter) {
        return <Text>No character details found</Text>;
    }

    // Rendu lorsque les données du personnage sont disponibles
    return (
        <View style={styles.container}>
            <Image
                style={styles.characterImage}
                source={{ uri: `${marvelCharacter.thumbnail.path}.${marvelCharacter.thumbnail.extension}` }}
            />
            <Text style={styles.characterName}>{marvelCharacter.name}</Text>
            <Text style={styles.characterDescription}>{marvelCharacter.description || 'No description available'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    characterImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    characterName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    characterDescription: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default GetDetailsCharacterCard;
