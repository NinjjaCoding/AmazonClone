
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { View, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../screens/AddressScreen/styles';

//Root is a name we chose ..cause it is the root screen or Root route i should saynpm 
const Stack = createStackNavigator();

//search bar logic once value entered
interface HeaderComponentProps {
    searchValue: string;
    setSearchValue: () => void;
}


//the header component with the search box
const HeaderComponent = ({searchValue, setSearchValue} : HeaderComponentProps) => {
    return( 
        <SafeAreaView  style={{backgroundColor: '#22e3dd'}}>
            <View style={{
                margin: 10, 
                padding: 5,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <Feather name='search' size={20}/>
                <TextInput style={{height: 40, margin: 10, padding: 5, marginLeft: 10, 
                       backgroundColor: 'white' }}  
                       placeholder='Search...'
                       value={searchValue}
                       onChangeText={setSearchValue}/>
                </View>
        </SafeAreaView>
    );
};

const HomeStack = () => {
                        //search bar
    const [searchValue, setSearchValue] = useState('');

    return(
            <Stack.Navigator  
                screenOptions={{
                header: () => (
                    <HeaderComponent 
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        />
                ),  
            }}>

                <Stack.Screen component={HomeScreen} 
                                name='HomeScreen' options={{title: 'Home'}} />

                                {() => <HomeScreen searchValue={searchValue} />}

                <Stack.Screen component={ProductScreen} 
                              name="ProductDetails" 
                            //  options={{title: 'ProductDetails'}}
                            />
        </Stack.Navigator>
       
        
      
       
       
       
    );
};

export default HomeStack;

