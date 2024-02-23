import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import { ApiSignUp } from '../../../api/useAuthApi';
interface Register {
  email: string;
  password: string;
  confirmPassword: string;
}
const useRegister = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const mutationRegisterUser = useMutation({
      mutationFn: async (data: Register) => {
        try {
          const response = await axios.post(ApiSignUp, data);
          setTimeout(() => {
            if (response.status === 201) {
              navigation.navigate('VerifyCodeScreen', { email: data.email });
            } else {
            }
          }, 200); // 2000 milliseconds = 2 seconds
        } catch (error) {
          console.log(error, 'lỗi toàn tập');
          // Handle errors if the request fails
        }
      },
    });
  return {
    mutationRegisterUser,
  };
};
export default useRegister;
