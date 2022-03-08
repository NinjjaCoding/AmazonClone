import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import ProductItem from '../../componants/ProductItem';

import products from '../../data/products';

const HomeScreen = ({searchValue} : {searchValue: string}) => {
    return (
        <View style={styles.page}>
             {/** render product item box component--after that creation then contain it in flatList  */}
           {/** <ProductItem item={products[7]}/>*/} 
            <FlatList 
            data={products}
            renderItem={({ item }) => <ProductItem item={item}/>}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );  
};

const styles = StyleSheet.create({ 
    page: {
        padding: 5
    },
});

export default HomeScreen;
{/**Render PrtoductItem box component --to define item we must go to productItem file and create an interface
             * to describe ProductItemProps interface ProductItem const: with JS we can use props but with TypeScript we must define the props  */}