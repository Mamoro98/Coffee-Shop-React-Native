import { View, Text, Image } from 'react-native';
import React from 'react'
import { MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../theme';

const Header = () => {
    return (
        <View className="flex-row items-center w-full justify-between px-2">
            <Image
                source={require("../assets/images/avatar.png")}
                className="h-9 w-9 rounded-full"
            />
            <View className=" flex-row items-center space-x-2 h-10">
                <MapPinIcon size="25" color={themeColors.bgLight} />
                <Text className="text-base font-semibold">Khartoum</Text>
            </View>
            <BellIcon size="27" color="black" />
        </View>
    )
}

export default Header