import React, {useState} from 'react'
import { View, Text, TextInput, Alert, 
    ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../AddressScreen/styles';
import countryList from 'country-list';
import Button from '../../componants/Button';

//for this screen we need address form and ways to manage state...
//1.country, 2. Text component with text input for name, add, city, , postal, 2. checkmark to make this default add 
//3. delivery ins. clickable Textinput form 4. Button to proceed to next step button


//for add we need to getData fetch from an API to display countries in <Picker/>
const countries = countryList.getData();



const AddressScreen = () => {
    //console.log(countryList.getCodeList());
    const [ country, setCountry ] = useState(countries[37].code)
    
    //we need useState to store the input for the names and other info--then onValueChange for th
    const [fullName, setFullname] = useState('');
    const [phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [state, setState ] = useState('');
    const [ postalcode, setPostalcode ] = useState('');
    const [ email, setEmail ] = useState('');

        //for our address error to invalidate wrong add...we need to expand the address onChangeText functions
    const [addressError, setAddressError ] = useState('');

    //checkout page validators
    const onCheckout = () => {
        if (addressError) {
            Alert.alert('Fix All Fields Before Submitting');
            return;
        }
        if (!fullName) {
            Alert.alert('Please fill in your name');
            return;
        }

        if (!phone && isPhoneNumberValid()) {
            Alert.alert('Please fill in your phone number');
            return;
        }
        console.log('Success. Checkout');

    };

                        //address validator conditions
    const validateAddress = () => {
        if (address.length < 5 ) {
            setAddressError('Address too short!');
        }
                        //we can add other conidtions like if street name does not match ...etc..
        if (address.length > 15 ) {
            setAddressError('Address is too long')
        } 
    }
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0 }>
            <ScrollView>
                <View style={styles.root}>
                    <View style={styles.row}>
                        <Text>AddressScreen</Text>

                                {/**we use Picker to choose countries and used npm country list to list countries */}
                                {/** <picker has 2 props: selectedValue={} onValueChange={} */}
                        <Picker selectedValue={country} onValueChange={setCountry}>
                            {countries.map(country => (
                                <Picker.Item value={country.code}  label={country.name}/> 
                                ))}
                        </Picker>
                    </View>
                        {/**text component for full name (last and first) */}
                    <View style={styles.row}> 
                        <Text style={styles.label}> Full Name (First and Last Name) </Text>
                             <TextInput style={styles.input} 
                                placeholder='Full Name'
                                value={fullName} 
                                onChangeText={setFullname}/> 
                    </View>
                        {/** Phone Number */}
                    <View style={styles.row}> 
                        <Text style={styles.label}> Phone Number </Text>
                        <TextInput style={styles.input}
                                keyboardType='numeric' 
                                placeholder='Phone Number'
                                value={phone} 
                                onChangeText={setPhone}/> 
                    </View>
                                {/**Email */}
                    <View style={styles.row}> 
                        <Text style={styles.label}> Email </Text>
                        <TextInput style={styles.input}
                                placeholder='email'
                                value={email} 
                                onChangeText={setEmail}
                                />            
                    </View>
                                {/**Address */}
                        <View style={styles.row}> 
                            <Text style={styles.label}> Address </Text>
                                <TextInput style={styles.input}
                                    placeholder='Address'
                                    value={address} 
                                //when validating address we can wait till add put in to validate-not as we type..this onEndEditing is a good method to achieve this
                                    onEndEditing={validateAddress}

                                // onChangeText={setAddress} //to below so that the red invalid warning disappears when typing
                                    onChangeText={text => {
                                    setAddress(text);
                                    setAddressError('');
                                    }}
                                /> 
                                {/** to validate the address against google database or api--double !! makes it become true or false operation */}
                                    {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}  
                        </View>

                                {/** City */}
                        <View style={styles.row}> 
                        <Text style={styles.label}> Your City </Text>
                            <TextInput style={styles.input}
                                placeholder='City'
                                value={city} 
                                onChangeText={setCity}/> 
                        </View>

                                {  /**Sate or province and postal code */}
                     <View style={styles.container}>   
                        <View style={styles.row}> 
                            <Text style={styles.label}> State/Province </Text>
                                <TextInput style={styles.input}
                                placeholder='State Or Province'
                                value={state} 
                                onChangeText={setState}/> 
                        </View>

                            {/**Postal code */}
                        <View style={styles.row}> 
                            <Text style={styles.label}> Postal Code </Text>
                                <TextInput style={styles.input}
                                    placeholder='Postal Code'
                                    value={postalcode} 
                                    onChangeText={setPostalcode}/> 
                        </View>
                     </View>

                    {/** Now off to "Proceed to Checkout" button and we use/import the Button component we can add components and functional components as we need to each screen  */}
                    <Button text='Proceed To CheckOut' onPress={onCheckout} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>     
    );
}; //now we can move on to creating the navigation and installing react navigation and its dependencies from readt navigation docs


export default AddressScreen;
