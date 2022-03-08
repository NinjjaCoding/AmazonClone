import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

const QuantitySelector = ({quantity, setQuantity}) => {
    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1 ));
        };

    const onPlus =() => {
        setQuantity(quantity + 1 );
    }


    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Text style={styles.buttonText}> - </Text>
            </Pressable>

            <Text style={styles.buttonText}> {quantity} </Text>

            <Pressable onPress={onPlus} style={styles.button}>
                <Text style={styles.buttonText}> + </Text>
            </Pressable>
            
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 100,
        justifyContent: 'space-between',
        marginVertical: 10,

    }, 
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'

    },
    buttonText: {   
        fontSize: 18,

    },
    quantity: {
        fontSize: 10,
        color: '#007eb9',
        
    }

})

export default QuantitySelector; 
