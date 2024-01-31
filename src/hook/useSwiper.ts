import  {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

const useSwiper = () => {
  const carouselRef = useRef(null); // Tạo một ref để tương tác với thành phần Swiper
  const navigation = useNavigation();
  const carouselItems = [
    {
      image: require('../image/Image.png'),
      title: 'Daily Reminder',
      description:
        'Provides free advice, reminders for medication schedules, and restrictions on activities/diet to prevent the spread of diseases.',
    },
    {
      image: require('../image/Image.png'),
      title: 'Treatment Reminder',
      description:
        'Helps monitor and adhere to treatment plans through detailed information from prescriptions.',
    },
  ];
  // Hàm để xử lý sự kiện nhấn nút "Next"
  const handleNextPress = () => {
    if (carouselRef.current) {
         // Cuộn đến mục tiếp theo trong carousel
      carouselRef.current.scrollBy(1, true);
       // Nếu đã đến mục cuối cùng, điều hướng đến màn hình 'Login'
      if (carouselRef.current.state.index === 1) {
        navigation.navigate('Login');
      }
    }
  };
  return {
    carouselRef ,
    navigation,
    carouselItems,
    handleNextPress,
  };

};

export default useSwiper;
