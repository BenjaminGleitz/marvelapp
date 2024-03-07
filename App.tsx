// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home/home';
import Show from './src/pages/show/show';

export type RootStackParamList = {
  Home: undefined;
  Show: { characterId: number };
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    cardStyle: { backgroundColor: '#AA0000' },
                }}
            >
                <RootStack.Screen name="Home" component={Home} />
                <RootStack.Screen name="Show" component={Show} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
