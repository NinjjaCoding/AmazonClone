import React from 'react';
import { View, Text, ScrollView  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../componants/QuantitySelector';
import Button from '../../componants/Button';
import ImageCarousell from '../../componants/ImageCarousell';

//components needed for this screen
//1. title 2. productImage carousal 3. options selector 4. price 5. description 
//6. Quantity selector 7. buttons ---when done with all of this then we build the shopping cart screen 

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(
        product.options ? product.options[0] : null,
         );
    
        //for state of quantity button selector the + or -
    const [quantity, setQuantity ] = useState(1);

    return ( 
       <ScrollView style={styles.container}>
                {/** Title */}
            <Text style={styles.title}> {product.title}</Text>

                {/**Image Carousal */} {/** for this we created its own component  */}
            <ImageCarousell images={product.images}/>

                {/**Options selector */}
                {/**for this we need install npm i @react-native-picker/picker-- the picker library from react-native 
                 * we lookedup installation and props(label & vlaue) and other props on reactnative picker docs--
                 * then use useState to update user choice of picker  */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                {product.options.map(option => (
                    <Picker.Item  label={option} value={option} />
                ))}         
             </Picker>

                    {/**Price */}
            <Text style={styles.price}> 
                From $ {product.price} 
                       {product.oldPrice && (
                            <Text style={styles.oldPrice}> $ {product.oldPrice}</Text>  
                    )}
            </Text>

                    {/**Description */}
            <Text style={styles.description}>{product.description}</Text>

                    {/**Quantity selector--
                     * since we will use this component on many places we create it separate--QuantitySelector * */}
             <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

                    {/** Buttons */}
                    {/** we have differnt kinds of buttons so we will create separae component to deal with all its complexities */}
            <Button  text={'Add To Cart'} 
                     onPress={() => {
                         console.warn('Add to cart');
                        }} 
                      //  containerStyles={{backgroundColor: 'yellow'}}
                        />
            
            <Button  text={'Buy Now'} 
                    onPress={() => {
                        console.warn('Buy Now');
                        }} />
           
        </ScrollView>
    );
};



export default ProductScreen;
