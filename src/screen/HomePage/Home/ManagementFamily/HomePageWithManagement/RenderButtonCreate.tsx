import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import renderbuttoncreate from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderButtonCreate';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
const renderButonCreate = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useNavigationOptionTreatmentRemindScreen = () => {
      navigation.navigate('OptionHeathCheckScreen');
    };
    const useNavigationOptionHeathCheckScreen = () => {
        navigation.navigate('CreateHeathCheckWithManagerScreen');
      };
    return (
        <View style={renderbuttoncreate.view}>
            <TouchableOpacity style={renderbuttoncreate.button} onPress={useNavigationOptionHeathCheckScreen} >
                <Text style={renderbuttoncreate.textbutton}>Create health check</Text>
            </TouchableOpacity>
            <TouchableOpacity style={renderbuttoncreate.button} onPress={useNavigationOptionTreatmentRemindScreen}>
                <Text style={renderbuttoncreate.textbutton}>CreateTreatment Remind Scheduling</Text>
            </TouchableOpacity>
        </View>
    );
};
export  default renderButonCreate;
