import { useState } from 'react';
import { useNavigation, NavigationProp, RouteProp, ParamListBase } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
const useRegisterWithManagement = (route: RouteProp<ParamListBase>)=> {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useNavigationAddInformationProfileScreen = () => {
        if (!role || !password) {
            setError('Please fill in all fields');
            return;
        }
        console.log('familyId before navigation', familyIdWithSignInGoogle, familyIdFromNormal, source);
        navigation.navigate('FillYourProfile', { familyId:familyIdWithSignInGoogle || familyIdFromNormal, role, password });
        console.log(role);
        console.log(password);
        console.log(familyIdFromNormal);
    };
    const useGoBack = () => {
        navigation.goBack();
    };
    const { source, familyIdWithSignInGoogle, familyIdFromNormal } = route.params as { source: string, familyIdWithSignInGoogle: string, familyIdFromNormal: string };
    const [role, setRule] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    return {useNavigationAddInformationProfileScreen, error, setError, useGoBack, familyIdWithSignInGoogle, familyIdFromNormal, role, setRule, password, setPassword};
};

export default useRegisterWithManagement;
