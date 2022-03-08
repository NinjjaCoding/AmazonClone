import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 7,
        padding: 10,
        backgroundColor: 'white',

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
description: {
    marginHorizontal: 10,
    lineHeight: 18,
    
}

});

export default styles;