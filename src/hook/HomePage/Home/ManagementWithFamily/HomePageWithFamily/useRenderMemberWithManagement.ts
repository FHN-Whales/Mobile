import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';

interface User {
  id: string;
  name: string;
  old: string;
  major: string;
  image: string;
}

const useRenderMemberWithManagement = (): { user: User[]; useNavigationAllMemberWithManagement: () => void; useNavigationAddMember: () => void; useNavigationEditMember: () => void } => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationAllMemberWithManagement = (): void => {
    navigation.navigate('AllMemberFamilyScreen');
  };
  const useNavigationAddMember = (): void => {
    navigation.navigate('AddMemberScreen');
  };
  const useNavigationEditMember = (): void => {
    navigation.navigate('EditMemberScreen');
  };
  const user: User[] = [
    {
      id: '1',
      name: 'Mẹ',
      old: '21 year old',
      major: 'Mobile Developer',
      image: require('../../../../../image/ha.jpg'),
    },
    {
      id: '2',
      name: 'Bố',
      old: '21 year old',
      major: 'Mobile Developer',
      image: require('../../../../../image/nhat.jpg'),
    },
    {
      id: '3',
      name: 'Con ',
      old: '21 year old',
      major: 'Mobile Developer',
      image: require('../../../../../image/xuan.jpg'),
    },
    {
      id: '4',
      name: 'Con',
      old: '22 year old',
      major: 'Front End Developer',
      image: require('../../../../../image/tien.jpg'),
    },
    {
      id: '5',
      name: 'Con',
      old: '21 year old',
      major: 'Tester Engeneer',
      image: require('../../../../../image/luan.jpg'),
    },
    {
      id: '6',
      name: 'Mẹ',
      old: '21 year old',
      major: 'Mobile Developer',
      image: require('../../../../../image/ha.jpg'),
    },
  ];
  return { user, useNavigationAllMemberWithManagement, useNavigationAddMember,useNavigationEditMember };
};

export default useRenderMemberWithManagement;
