
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import bottomTabNav from './bottomTabNav';

//Root is a name we chose ..cause it is the root screen or Root route i should saynpm 
const Root = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown: false }}>
                <Root.Screen component={bottomTabNav} name='HomeTabs'/>
            </Root.Navigator>
        </NavigationContainer>
       
       
       
    );
};

export default Router;

