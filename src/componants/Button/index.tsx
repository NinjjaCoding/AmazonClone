import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native';


interface ButtonProps {
    text: string;
    onPress: () => void;
    containerStyles ? : object;
} //remember this is only with TypeScript...with JavaScript we do not need to define props-its automatic

const Button = ({ text, onPress } : ButtonProps ) => {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        marginVertical: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
       borderRadius: 7,
       borderWidth: 1,
       borderColor: 'black'

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',

    },
})

export default Button;
