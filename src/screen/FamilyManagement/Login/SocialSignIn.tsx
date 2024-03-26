/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
// SocialSignIn.js
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import login from '../../../styles/FamilyManagement/Login/LoginScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
GoogleSignin.configure({
    webClientId: '890799200129-18uuov1v76spkhno1midb840bsjv9f1k.apps.googleusercontent.com',
});
const SocialSignIn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLoginWithGoogle = async () => {
        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog:true,
        });
        const api = 'http://www.whales-fhn.dns-dynamic.net:8000/auth/SignInWithGoogle';
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const user = userInfo.user;
            const response = await axios.post(api, user);
            console.log("response222",response.data.isMember);
            console.log('userInfo.user',userInfo.user);
            if (response.data.isMember) {
                const familyId = response.data.familyId;
                console.log("familyId",familyId);
                navigation.navigate('LoginWithRoleScreen', { userData: userInfo.user,familyIdWithSignInGoogle:familyId });
            } else {
                const familyId = response.data.familyId;
                navigation.navigate('RegisterAsManagerScreen', { userData: userInfo.user, familyIdWithSignInGoogle:familyId });
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogout = async () => {
        await GoogleSignin.signOut();
    };
    return (
        <View>
            <Text style={{ padding:10 }} onPress={handleLogout}>Log out</Text>
            <View style={login.viewContinue}>
                <TouchableOpacity style={login.Google} onPress={handleLoginWithGoogle}>
                    <View style={login.viewGoogle}>
                        <Image source={require('../../../image/Google-Original.png')} />
                        <Text style={login.textGoogle}>Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={login.Google}>
                    <View style={login.viewGoogle}>
                        <Image source={require('../../../image/Facebook.png')} />
                        <Text style={login.textGoogle}>Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default SocialSignIn;
