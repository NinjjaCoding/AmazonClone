import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

//Root is a name we chose ..cause it is the root screen or Root route i should saynpm 
const Stack = createStackNavigator();

const ShoppingCartStack = () => {
    return (
        <Stack.Navigator>
                <Stack.Screen component={ShoppingCart} 
                                name='Cart' 
                                options={{title: 'Shopping Cart'}}
                                />
                <Stack.Screen component={AddressScreen} 
                              name="Address" 
                            options={{title: 'Address'}}
                            />
        </Stack.Navigator>
      
       
       
       
    );
};

export default ShoppingCartStack;