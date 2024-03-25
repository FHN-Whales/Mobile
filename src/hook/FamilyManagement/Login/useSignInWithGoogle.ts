import { useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
GoogleSignin.configure({
    webClientId: '890799200129-18uuov1v76spkhno1midb840bsjv9f1k.apps.googleusercontent.com',
});
const useSignInWithGoogle =() =>{
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
            console.log(userInfo.user);
            if (response.data.exists) {
                const familyId = response.data.familyId;
                console.log(familyId);
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
        isLoading,
        setIsLoading,
        handleLoginWithGoogle,
        handleLogout,
    );
}
export default useSignInWithGoogle;