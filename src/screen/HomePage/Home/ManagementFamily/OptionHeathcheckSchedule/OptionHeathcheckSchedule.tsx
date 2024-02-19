import React from 'react';
import {  View } from 'react-native';
import renderButtonAddBill from './RenderButtonAddBill';
import renderButtonScanBill from './RenderButtonScanBill';
import optionHeathCheck from '../../../../../styles/HomePage/Home/ManagementFamily/OptionHeathcheckSchedule/OptionHeathcheckSchedule';
const OptionHeathCheckScreen = () =>{
    return (
        <View style={optionHeathCheck.container}>
            {renderButtonAddBill()}
            {renderButtonScanBill()}
        </View>
    );
};
export default OptionHeathCheckScreen;
