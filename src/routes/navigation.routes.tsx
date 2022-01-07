import React from 'react';
import { HomeScreen } from '../modules/Home';
import { CartScreen } from '../modules/cart';
import { DetailsScreen } from '../modules/details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Details" component={DetailsScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
        </Stack.Navigator>
    );
}

export default Routes;