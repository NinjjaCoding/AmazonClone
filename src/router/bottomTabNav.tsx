import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from "./ShoppingCartStack";

//1. createBottomTabNavigator and inside of it different screen tabs we install in it --in this case 4
//bottomTabNav buttons we can show labels ? or not and show icons instead from vector icons we chose Entypo vector icon

//we can then change the 
const Tab = createBottomTabNavigator();

const bottomTabNav = () => {
    return (
        <Tab.Navigator tabBarOptions={{
                showLabel: false, 
                inactiveTintColor: '#ffbd7d',
                activeTintColor: 'red',
                }}>
            
              <Tab.Screen 
              component={HomeStack} name='Home'
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name='home' color={color} size={25} />
                        ),
                }} />
            <Tab.Screen component={HomeScreen} name='profile' 
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name='user' color={color} size={25} />
                        ),
                    }}/>

            <Tab.Screen component={ShoppingCartStack} name='Shopping Cart'
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name='shopping-cart' color={color} size={25} />
                ),
            }} />

            <Tab.Screen component={HomeScreen} name='More'
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name='menu' color={color} size={25} />
                ),
            }} />
        </Tab.Navigator>

    );
};

export default bottomTabNav;