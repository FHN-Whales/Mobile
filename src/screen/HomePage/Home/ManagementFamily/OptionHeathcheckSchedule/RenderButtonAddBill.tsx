import React from 'react';
import { Image,Text, TouchableOpacity, View } from 'react-native';
import renderButtonAddBills from '../../../../../styles/HomePage/Home/ManagementFamily/OptionHeathcheckSchedule/RenderButtonAddBill';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
const renderButtonAddBill  = () =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useNavigationCreateTreatmentRemindScreen = (): void => {
        navigation.navigate('CreateTreatmentRemindScreen');
      };
    return (
        <View style={renderButtonAddBills.container}>
           <TouchableOpacity style={renderButtonAddBills.buttonCreateBill} onPress={useNavigationCreateTreatmentRemindScreen}>
                <Text  style={renderButtonAddBills.textCreateBill}>Add New Bill</Text>
                <View style={renderButtonAddBills.viewImage}>
                    <Image source={require('../../../../../image/flat-color-icons_plus1.png')} />
                </View>
            </TouchableOpacity>
         </View>
    );
};
export default renderButtonAddBill;
