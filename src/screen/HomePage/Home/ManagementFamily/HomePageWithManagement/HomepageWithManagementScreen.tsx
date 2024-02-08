import React from 'react';
import homepagewithmanagement from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/HomePageWithManagement';
import { renderHeader } from './RenderHeader';
import renderCalendar from './RenderCalendar';
import renderListMemberWithManagement from './RenderMemberWithManagement';
import renderButonCreate from './RenderButtonCreate';
import { ScrollView } from 'react-native';
const HomePageWithManagement = () =>{
    return (
        <ScrollView style={homepagewithmanagement.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
            {renderHeader()}
            {renderCalendar()}
            {renderListMemberWithManagement()}
            {renderButonCreate()}
        </ScrollView>
    );
};
export  default HomePageWithManagement;
