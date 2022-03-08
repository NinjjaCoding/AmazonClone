import React from 'react';
import { useState } from 'react';
import { Image, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

//to build: similar to home screen with changes...
interface CartProductItemProps {
    cartItem: {
        id: string;
        quantity: number;
        option ? : string; //option ? means optional 
        item: {
            id: string;
        title: string;
        image: string;
        avgRating: number,
        ratings: number,
        price: number;
        oldPrice: number;
        };   
    }
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
    const {quantity: quantityProp, item } = cartItem;

    //quantity selector 
    const [quantity, setQuantity] = useState(quantityProp);

    return ( 
        <View style={styles.root}>
            <View style={styles.row}> 
             
            {/** image component  */}
                <Image style={styles.image} source={{ uri: item.image }} />                
           
            {/** then we design the desc, price and ratings here and put all thees in one View */}
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                
            {/** ratings component */}
                <View style={styles.ratingsContainer}>
                             {/**here we put the logic of half stars on ratings----el means elements--- */}
                    {[0,0,0,0,0].map((el, index ) => 
                        <FontAwesome 
                            key={'$ {item.id}- ${index}'}
                            style={styles.star} 
                            name={ index < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={18} color={'#e47911'}
                            />)}   

                {/**text to display the number of people who rated the item--now we input value but then it will change to a function  */}
                    <Text>{item.ratings}</Text>   
                </View>    

            {/** Price component  */}
                <Text style={styles.price}> From $ {item.price}  
                   {/**}<Text style={styles.oldPrice}> $ {item.oldPrice}</Text> ///but to put logic inthis last one 
                    * if the oldPrice exist then display .if not then do not disiplay the $ sign  */}
                   {item.oldPrice && ( <Text style={styles.oldPrice}> $ {item.oldPrice}</Text> )}
                </Text>     
            </View>
        </View>

        <View style={styles.quantityContainer}>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
        </View>
    </View>




    
    );
};

export default CartProductItem;
