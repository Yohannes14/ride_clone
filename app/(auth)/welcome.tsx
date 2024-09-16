import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { onboarding } from './constants'
import CustomButton from '@/components/CustomButton'

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;
    return (
        <SafeAreaView className='flex h-full justify-between items-center bg-white pt-[24px]'>
            <TouchableOpacity className='w-full flex justify-end items-end p-5' onPress={() => router.replace('/(auth)/sign-up')}>
                <Text className='text-black text-md font-JakartaBold'>Skip</Text>
            </TouchableOpacity>
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0]' />}
                activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => (
                    <View key={item.id}
                        className=' flex justify-cente items-center'
                    >
                        <Image className='w-full h-[300px]'
                            source={item.image} resizeMode='contain' />
                        <View className='flex flex-row justify-center items-center w-full mt-10'>
                            <Text className='text-black text-3xl font-bold mx-10 text-center'>{item.title}</Text>

                        </View>
                        <Text className='text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3'>{item.description}</Text>

                    </View>
                ))}

            </Swiper>
            <CustomButton
                title={isLastSlide ? "Get Started" : "Next"}
                onPress={() => isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)}
               className="w-11/12 mt-12"
            />
        </SafeAreaView >
    )
}

export default Onboarding