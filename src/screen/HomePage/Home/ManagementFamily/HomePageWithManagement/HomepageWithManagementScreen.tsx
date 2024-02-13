import React from 'react';
import homepagewithmanagement from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/HomePageWithManagement';
import { renderHeader } from './RenderHeader';
import renderCalendar from './RenderCalendar';
import renderListMemberWithManagement from './RenderMemberWithManagement';
import renderButonCreate from './RenderButtonCreate';
import {  FlatList, View } from 'react-native';
const HomePageWithManagement = () =>{
    const headerComponent = () => {
        return (
          <View style={homepagewithmanagement.container}>
             {renderCalendar()}
            {renderListMemberWithManagement()}
            {renderButonCreate()}
          </View>
        );
      };
    return (
        <View style={homepagewithmanagement.container}>
        {renderHeader()}
        <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
          ListEmptyComponent={headerComponent}
          data={[]}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          renderItem={({ item }) => (
            <View>
              <></>
            </View>
          )}
        />
      </View>
    );
};
export  default HomePageWithManagement;
