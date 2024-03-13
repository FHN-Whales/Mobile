import { useRef } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../type/type';
interface CarouselItem {
  image: number;
  title: string;
  description: string;
}
interface UseSwiperResult {
  carouselRef: React.RefObject<any>;
  navigation: NavigationProp<RootStackParamList>;
  carouselItems: CarouselItem[];
  handleNextPress: () => void;
  useNavigationRegisterScreen: () => void;
}

const useSwiper = (): UseSwiperResult => {
  const carouselRef = useRef<any>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const carouselItems: CarouselItem[] = [
    {
      image: require('../../image/Image.png'),
      title: 'Daily Reminder',
      description:
        'Provides free advice, reminders for medication schedules, and restrictions on activities/diet to prevent the spread of diseases.',
    },
    {
      image: require('../../image/Image.png'),
      title: 'Treatment Reminder',
      description:
        'Helps monitor and adhere to treatment plans through detailed information from prescriptions.',
    },
  ];
  const handleNextPress = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy(1, true);
      if (carouselRef.current.state.index === 1) {
        navigation.navigate('LoginScreen');
      }
    }
  };
  const useNavigationRegisterScreen = (): void => {
    navigation.navigate('LoginScreen');
  };
  return {
    carouselRef,
    navigation,
    carouselItems,
    handleNextPress,
    useNavigationRegisterScreen,
  };
};

export default useSwiper;
