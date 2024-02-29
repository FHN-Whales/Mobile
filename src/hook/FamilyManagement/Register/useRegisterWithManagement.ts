import {useState} from 'react';
import { useNavigation, NavigationProp, RouteProp, ParamListBase } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
const useRegisterWithManagement = (route: RouteProp<ParamListBase>) =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useNavigationAddInformationProfileScreen = () => {
      navigation.navigate('FillYourProfile', {familyId: familyId,role: role,password: password,});
      console.log(familyId);
      console.log(role);
      console.log(password);
    };
    const useGoBack = () => {
      navigation.goBack();
    };
    const { familyId } = route.params as {familyId:string};
    const [role, setRule] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return {useNavigationAddInformationProfileScreen,useGoBack,familyId,role,setRule,password,setPassword};
};
export default  useRegisterWithManagement;
