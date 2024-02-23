/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import renderButtonScanBills from '../../../../../styles/HomePage/Home/ManagementFamily/OptionHeathcheckSchedule/RenderButtonScanBill';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../type/type';
const renderButtonScanBill  = () =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useNavigationScanScreen = () => {
        navigation.navigate('ScanScreen');
      };
    return (
        <View style={renderButtonScanBills.container}>
           <TouchableOpacity style={renderButtonScanBills.buttonCreateBill} onPress={useNavigationScanScreen}>
                <Text  style={renderButtonScanBills.textCreateBill}>Scan Bill</Text>
                <View style={renderButtonScanBills.viewImage}>
                    <Image source={require('../../../../../image/camera.png')} />
                </View>
            </TouchableOpacity>
         </View>
    );
};
export default renderButtonScanBill;
