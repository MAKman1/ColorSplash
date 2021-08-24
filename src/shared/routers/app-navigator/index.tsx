import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../../../pages/splash';
import Home from '../../../pages/home';
const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator