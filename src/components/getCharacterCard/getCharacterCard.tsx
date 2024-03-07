import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Character {
    id: number;
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

interface CharacterCardProps {
    character: Character;
}

const GetCharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const navigation = useNavigation();

    const handleCardPress = () => {
        navigation.navigate('Show', { characterId: character.id });
    };

    return (
        <TouchableOpacity onPress={handleCardPress}>
            <View style={styles.container}>
                <Image
                    style={styles.characterThumbnail}
                    source={{ uri: character.thumbnail.path + '.' + character.thumbnail.extension }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.characterName}>{character.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: 180,
        height: 300,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#000',
        overflow: 'hidden',
        margin: 5,
    },
    characterThumbnail: {
        width: '100%',
        height: '70%',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderTopWidth: 5,
        borderTopColor: '#000',
    },
    characterName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default GetCharacterCard;
