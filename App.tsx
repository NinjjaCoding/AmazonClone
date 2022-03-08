/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AddressScreen from './src/screens/AddressScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen'
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import Router from './src/router';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       {/** <HomeScreen />     */}
       {/** <ProductScreen />  */}
       {/** <ShoppingCartScreen />*/}
       {/**        <AddressScreen /> */}

           <Router />
       
     
    </SafeAreaView>
  );
};



export default App;
