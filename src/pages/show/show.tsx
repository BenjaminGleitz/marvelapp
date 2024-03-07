// Show.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import DisplayDetailsCharacterCard from "../../components/displayDetailsCharacterCard/displayDetailsCharacterCard";

interface RouteParams {
    characterId: number;
}

const Show = () => {
    const route = useRoute();
    const { characterId } = route.params as RouteParams; // Cast pour spécifier le type de route.params

    console.log('page show: character id', characterId)

    return (
        <View style={styles.container}>
            <DisplayDetailsCharacterCard characterId={characterId} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Show;
