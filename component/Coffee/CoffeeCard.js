import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'
import { StarIcon, PlusIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native"

export default function CoffeeCard({ item }) {
    const nav = useNavigation()
    return (
        <View
            style={{
                borderRadius: 40,
                backgroundColor: themeColors.bgDark,
                height: 350,
                width: 250,
            }}
            className="px-4 "

        >
            <View
                className="flex-row  justify-center mt-1 "
            >
                <Image source={item.image} className="h-40 w-40" />
            </View>
            <Text className="text-white font-bold text-xl mt-4">
                {item.name}
            </Text>
            <View className="mx-1 px-1 items-center justify-evenly w-16 p-1 mt-2 rounded-full flex-row"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
                <StarIcon size={17} color={"white"} />
                <Text className="font-semibold text-white text-md">{item.stars}</Text>
            </View>
            <View className="mx-1 px-1 flex-row justify-between items-center w-28 mt-2 ">
                <Text className="font-semibold text-base text-white opacity-50 mr-1">Volume</Text>
                <Text className="font-semibold text-base text-white ">{item.volume}</Text>
            </View>


            <View className="mt-2 mx-2 flex-row justify-between items-center ">
                <Text className="font-semibold text-base text-white ">
                    ${item.price}
                </Text>

                <TouchableOpacity
                    onPress={() => nav.navigate('Product', { ...item })}
                    className="bg-white p-4 rounded-full">
                    <PlusIcon size={25} color={themeColors.bgDark} strokeWidth={40} />
                </TouchableOpacity>


            </View>


        </View>
    )
}

