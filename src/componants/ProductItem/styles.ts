import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        padding: 10

    },
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 3,
    }, 
    image: {
        flex: 2,
        height: 150,        
        resizeMode: 'contain',
    }, 
    rightContainer: {
        padding: 10,
        flex: 3

    },
    title: {
        fontSize: 17

    },
    price: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through', 
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2
    },
    
});

export default styles;