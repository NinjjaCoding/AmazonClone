import React from 'react'
import { Image, View, Text, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


interface ProductItemProps {
        item: {
        id: string;
        title: string;
        image: string;
        avgRating: number,
        ratings: number,
        price: number;
        oldPrice?: number;
        };   
    }

const ProductItem = ({ item }: ProductItemProps) => {
    
    //this is used to transition between clicked item on homeScreen to that screen 
    const navigation = useNavigation();

    const onPress = () => {
       // console.warn('Item Pressed');
        navigation.navigate( 'ProductDetails', {id: item.id});

    };
    return (
    <Pressable onPress={onPress} style={styles.root}> 
             
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
                   {item.oldPrice && (
                                <Text style={styles.oldPrice}> $ {item.oldPrice}</Text> 
                            )}
                </Text>
                {/**old prices of the product or if it is on sales we can display the regualr price */}
            </View>
    </Pressable>
    );
};

export default ProductItem;
