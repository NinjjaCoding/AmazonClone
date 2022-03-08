import React from 'react';
import { StyleSheet, View, FlatList, Image, useWindowDimensions } from 'react-native';
import { useState, useCallback } from 'react';


const ImageCarousell = ({ images }: {images:string[]}) => {
    const [activeIndex, setActiveIndex ] = useState(1); //this is active image index on carousell 
    const windowWidth = useWindowDimensions().width; //took this from the docs to auto adjust to screen sizes 

    const onFlatlistUpdate = useCallback(({viewableItems}) => { //to change dots on carousell according to index
        if (viewableItems.length > 0 ) {
            setActiveIndex(viewableItems[0].index || 0 );
        }
        console.log(viewableItems);
        }, []); //this will make the dots on carousell change with the picture..
    
    

    return (
        <View style={styles.root}>

            <FlatList 
                data={images}
                renderItem={({ item }) => (
                <Image style={[styles.image, {width: windowWidth - 40 }]} 
                        source={{ uri: item }} />   
                )}
                horizontal //will display the images horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth -20 }
                snapToAlignment={'center'}
                decelerationRate={'fast'} //how fast moving from one item to another on carousell 
                
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 51,
                    minimumViewTime: 300,
                }}
                onViewableItemsChanged={ onFlatlistUpdate }
            /> 

            {/** this is where the dots below the carousell  */}
            <View style={styles.dots}>
                {images.map((image, index ) => (
                <View 
                    style={[
                        styles.dot,
                        {
                        backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'
                        }
                    ]}/>
                ))}
            </View> 


        </View>
    );
};

const styles = StyleSheet.create({
    root: {

    },
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain',
        
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    dot: {
        width: 10, 
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: 'red', 
        margin: 5,
    }
})


export default ImageCarousell;
