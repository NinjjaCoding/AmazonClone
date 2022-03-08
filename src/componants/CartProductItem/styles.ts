import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        padding: 5,

    },
    root: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 3,
        padding: 3,
    }, 
    row: {
        flexDirection: 'row',
    },
    image: {
        flex: 2,
        height: 150,        
        resizeMode: 'contain',
    }, 
    rightContainer: {
        padding: 5,
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
    quantityContainer: {
        margin: 5,
    },
    
});

export default styles;