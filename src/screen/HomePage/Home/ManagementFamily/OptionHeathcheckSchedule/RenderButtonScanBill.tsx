import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import renderButtonScanBills from '../../../../../styles/HomePage/Home/ManagementFamily/OptionHeathcheckSchedule/RenderButtonScanBill';
const renderButtonScanBill  = () =>{
    return (
        <View style={renderButtonScanBills.container}>
           <TouchableOpacity style={renderButtonScanBills.buttonCreateBill}>
                <Text  style={renderButtonScanBills.textCreateBill}>Scan Bill</Text>
                <View style={renderButtonScanBills.viewImage}>
                    <Image source={require('../../../../../image/camera.png')} />
                </View>
            </TouchableOpacity>
         </View>
    );
};
export default renderButtonScanBill;
