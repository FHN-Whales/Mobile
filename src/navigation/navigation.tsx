/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/Landing/SplashScreen';
import OnboardingScreen from '../screen/Landing/OnboardingScreen';
import RegisterScreen from '../screen/FamilyManagement/Register/RegisterScreen';
import RegisterAsManagerScreen from '../screen/FamilyManagement/Register/RegisterAsAManagerscreen';
import AddInformationProfileScreen from '../screen/FamilyManagement/Register/AddInformationProfileScreen';
import LoginScreen from '../screen/FamilyManagement/Login/LoginScreen';
import ForgetPasswordScreen from '../screen/FamilyManagement/ForgetPassword/ForgetPasswordScreen';
import ResetPasswordScreen from '../screen/FamilyManagement/ForgetPassword/ResetPasswordScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image} from 'react-native';
import HomePageWithManagement from '../screen/HomePage/Home/ManagementFamily/HomePageWithManagement/HomepageWithManagementScreen';
import AllMemberFamilyScreen from '../screen/HomePage/Home/ManagementFamily/AllMemberFamilyScreen/AllMemberFamilyScreen';
import AddMemberScreen from '../screen/HomePage/Home/ManagementFamily/AddMember/AddmemberScreen';
import EditMemberScreen from '../screen/HomePage/Home/ManagementFamily/EditMember/EditMemberScreen';
// import BlogScreen from '../screen/HomePage/Blog/BlogScreen/BlogScreen';
import PostBlogScreen from '../screen/HomePage/Blog/CreateBlog/PostBlogScreen';
import EditBlogScreen from '../screen/HomePage/Blog/EditBlog/EditBlogScreen';
import CalendarScreen from '../screen/HomePage/Calendar/CalendarWithManagement/CalendarWithManagementScreen';
import ProfileScreen from '../screen/HomePage/Profile/ShowProfile/ProfileScreen';
import EditProfileScreen from '../screen/HomePage/Profile/EditProfile/EditProfileScreen';
import NotificationScreen from '../screen/HomePage/Notification/Notificationswhenusingtheapp/NotificationScreen';
import OptionHeathCheckScreen from '../screen/HomePage/Home/ManagementFamily/OptionHeathcheckSchedule/OptionHeathcheckSchedule';
import SentVerifyCodeForgetpassword from '../screen/FamilyManagement/ForgetPassword/SentVerifyCodeForgetpassword';
import VerifyCodeScreen from '../screen/FamilyManagement/Register/VerifyCodeScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ScanScreen from '../screen/HomePage/TreatmentRemindScheduling/Treatment Remind SchedulingWithManagement/Scan/ScanwithManagement';
import CreateTreatmentRemindScreen from '../screen/HomePage/TreatmentRemindScheduling/Treatment Remind SchedulingWithManagement/InputInformationManually/AddTreatmentReminder/CreateTreatmentRemind';
import LoginWithRoleScreen from '../screen/FamilyManagement/Login/LoginWithRoleScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { useCheckAuth } from '../hook/FamilyManagement/CheckAuth/useCheckAuth';
import CreateHeathCheckWithManagerScreen from '../screen/HomePage/HealthCheckScheduling/HealthCheckSchedulingwithManager/CreateHealthCheck/CreateHeathCheckWithManager';
import EditHeathCheckWithManagerScreen from '../screen/HomePage/HealthCheckScheduling/HealthCheckSchedulingwithManager/EditHeathCheckWithManager';
const Homestack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconImageSource: any;
          if (route.name === 'HomePage') {
            iconImageSource = focused
              ? require('../image/Home1.png')
              : require('../image/Home.png');
          } else if (route.name === 'Blog') {
            iconImageSource = focused
            ? require('../image/Profile1.png')
              : require('../image/Profile.png');
          } else if (route.name === 'Calendar') {
            iconImageSource = focused
              ? require('../image/calendar.png')
              : require('../image/Appointment.png');
          } else if (route.name === 'Profile') {
            iconImageSource = focused
              ? require('../image/Profile1.png')
              : require('../image/Profile.png');
          }
          return (
            <Image
              source={iconImageSource}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ width: size, height: size, tintColor: color,  marginTop:15, paddingLeft:20, paddingBottom:20 }}
            />
          );
        },
        tabBarLabel: '',
        tabBarInactiveTintColor: '#87CEFA',
        tabBarActiveTintColor: '#91d3fa',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height:76,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen  name="HomePage" component={HomePageWithManagement} />
      {/* <Tab.Screen  name="Blog" component={BlogScreen} /> */}
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const Navigate = () => {
  const queryClient = new QueryClient();
  const authenticated = useCheckAuth();
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer  >
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="ScreenCheck"
          component={authenticated === true ? Homestack : SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RegisterAsManagerScreen"
          component={RegisterAsManagerScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="FillYourProfile"
          component={AddInformationProfileScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="LoginWithRoleScreen"
          component={LoginWithRoleScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="SentVerifyCodeForgetpassword"
          component={SentVerifyCodeForgetpassword}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="AllMemberFamilyScreen"
          component={AllMemberFamilyScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="AddMemberScreen"
          component={AddMemberScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditMemberScreen"
          component={EditMemberScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="PostBlogScreen"
          component={PostBlogScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="EditBlogScreen"
          component={EditBlogScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="EditProfileScreen"
          component={EditProfileScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="NotificationScreen"
          component={NotificationScreen}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="OptionHeathCheckScreen"
          component={OptionHeathCheckScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="VerifyCodeScreen"
          component={VerifyCodeScreen}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="ScanScreen"
          component={ScanScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="CreateTreatmentRemindScreen"
          component={CreateTreatmentRemindScreen}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="CreateHeathCheckWithManagerScreen"
          component={CreateHeathCheckWithManagerScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="EditHeathCheckWithManagerScreen"
          component={EditHeathCheckWithManagerScreen}
        />
         <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={Homestack} />
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
};
export default Navigate;
