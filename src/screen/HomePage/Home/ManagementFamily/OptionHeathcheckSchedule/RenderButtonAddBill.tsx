import React from 'react';
import { Image,Text, TouchableOpacity, View } from 'react-native';
import renderButtonAddBills from '../../../../../styles/HomePage/Home/ManagementFamily/OptionHeathcheckSchedule/RenderButtonAddBill';
const renderButtonAddBill  = () =>{
    return (
        <View style={renderButtonAddBills.container}>
           <TouchableOpacity style={renderButtonAddBills.buttonCreateBill}>
                <Text  style={renderButtonAddBills.textCreateBill}>Add New Bill</Text>
                <View style={renderButtonAddBills.viewImage}>
                    <Image source={require('../../../../../image/flat-color-icons_plus1.png')} />
                </View>
            </TouchableOpacity>
         </View>
    );
};
export default renderButtonAddBill;
