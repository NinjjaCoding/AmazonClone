//shopping cart screen is similar to home screen so we will import or use the same code
import React from "react";
import { View, StyleSheet, FlatList, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CartProductItem from "../../componants/CartProductItem";
import products from "../../data/cart";
import Button from "../../componants/Button";

//components: 1. subtotal 2. checkout button 3.List of items in cart 4.Quantity selector--when done we need address form screen

const ShoppingCartScreen = () => {
    
    const navigation = useNavigation();
    
    const totalPrice = products.reduce(
            (summedPrice, product) =>
            summedPrice + product.item.price * product.quantity,
            0,
            );

            const onCheckout = () => {
                navigation.navigate('Address');
                }

    return (
        <View style={styles.page}>
 
         {/**subtotal and check and gift receipt checkmark */}
            <View>
                <Text style={{fontSize: 18,}}>
                    Subtotal ({products.length} items )  {/** :${totalPrice.toFixed is the remaining argument below} */}
                    <Text style={{color: '#e47911', fontWeight: 'bold' }}>
                         : $ {totalPrice.toFixed(2)}
                    </Text> 
                </Text> 

                    {/**for the checkout cart button we just import the button component and style it and code the logic */}  
                    <Button text="Proceed To Checkout" 
                    onPress={onCheckout}
                    containerStyles={{backgroundColor: '#f7e400'}} />
            </View> 

         {/**Render product component--ProductItem component here as well */}
            <FlatList 
                data={products}
                renderItem={({ item }) => <CartProductItem cartItem={item}/> }
                showsVerticalScrollIndicator={false}
                />

        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
});

export default ShoppingCartScreen;