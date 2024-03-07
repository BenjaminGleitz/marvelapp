import React from 'react';
import { View, StyleSheet } from 'react-native';
import GetDetailsCharacterCard from '../getDetailsCharacterCard/getDetailsCharacterCard';

interface DisplayCharacterProps {
    characterId: number; // Ajout de la prop characterId
}

const DisplayDetailsCharacterCard: React.FC<DisplayCharacterProps> = ({ characterId }) => {

    console.log('DisplayDetailsCharacterCard : character id', characterId)
    return (
        <View style={styles.cardsContainer}>
            <GetDetailsCharacterCard characterId={characterId} />
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

export default DisplayDetailsCharacterCard;
