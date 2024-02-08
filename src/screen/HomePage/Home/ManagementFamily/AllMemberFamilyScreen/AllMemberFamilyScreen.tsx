import React from 'react';
import { View} from 'react-native';
import renderAllMemberFamily from './RenderAllMemberFamily';
import renderTitle from './RenderTitle';
import renderbuttonCreate from './RenderButonCreate';
import allmemberfamilys from '../../../../../styles/HomePage/Home/ManagementFamily/AllMemberFamily/AllMemberFamilyScreen';
const AllMemberFamilyScreen = () =>{
    return (
        <View style={allmemberfamilys.container}>
            {renderTitle()}
            {renderAllMemberFamily()}
            {renderbuttonCreate()}
        </View>
    );
};
export default  AllMemberFamilyScreen;
