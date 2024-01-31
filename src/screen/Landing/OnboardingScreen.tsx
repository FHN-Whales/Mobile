import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import onboarding from '../../styles/Langding/OnboardingScreen';
import useSwiper from '../../hook/useSwiper';
const OnboardingScreen = () => {
const {carouselRef ,carouselItems,handleNextPress,} = useSwiper();
  const renderCarouselItem = (item: { image: any; title: any; description: any; }, index: React.Key | null | undefined) => (
    <View key={index}>
      <Image style={onboarding.image} source={item.image} />
        <View style={onboarding.viewtext} >
            <Text style={onboarding.textDaily}>{item.title}</Text>
            <Text style={onboarding.textProvides}>{item.description}</Text>
        </View>
        <View style= {onboarding.viewbutton}>
        <TouchableOpacity style={onboarding.button} onPress={handleNextPress}>
            <Text style={onboarding.textbutton}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity >
        <Text style={onboarding.textSkip}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={onboarding.container}>
      <Swiper
        ref={carouselRef}
        activeDotStyle={onboarding.activeDot}
        dotStyle={onboarding.dot}
        // autoplay={true}
        // autoplayTimeout={5} // Thời gian giữa các lượt cuộn (tính bằng giây)
      >
        {carouselItems.map((item, index) => renderCarouselItem(item, index))}
      </Swiper>
    </View>
  );
};

export default OnboardingScreen;
