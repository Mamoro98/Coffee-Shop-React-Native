import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Platform, Image } from 'react-native';
import React, { useState } from 'react'
import BgImage from '../component/BgImage';
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftCircleIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { StarIcon, MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import { themeColors } from '../theme';

const Product = (props) => {
    const [size, setsize] = useState("small")
    const [counter, setCounter] = useState(0)

    const item = props.route.params
    const nav = useNavigation()
    return (
        <View className="flex-1">
            <BgImage
                styles={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
                height={300} opacity={1} imageurl={require("../assets/images/beansBackground2.png")} />
            <View style={{
                paddingTop: Platform.OS === 'android' ? 30 : 0,
                paddingHorizontal: 10
            }}>
                <View
                    className=" flex-row justify-between items-center w-full">
                    <TouchableOpacity onPress={() => nav.goBack()}>
                        <ArrowLeftCircleIcon color="white" strokeWidth={1.5} size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity className="rounded-full border-white border-2 p-2"  >
                        <HeartIcon color="white" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="justify-center flex-row"

            >
                <Image className="h-60 w-60" source={item.image} />
            </View>
            <View className="mx-4 px-1 items-center justify-evenly w-16 p-1 mt-2 rounded-full flex-row"
                style={{ backgroundColor: themeColors.bgLight }}
            >
                <StarIcon size={17} color={"white"} />
                <Text className="font-semibold text-white text-md">{item.stars}</Text>
            </View>

            <View className="mx-4 mt-4 flex-row justify-between items-center">
                <Text className="text-4xl font-semibold"
                    style={{
                        color: themeColors.bgLight
                    }}
                >
                    {item.name}
                </Text>
                <Text className="text-lg font-medium"

                >
                    ${item.price}
                </Text>

            </View>

            <View className="m-4 flex-col">
                <Text className="text-xl font-medium">
                    Coffee Size
                </Text>
                <View className="mt-4 flex-row w-full justify-between">
                    <TouchableOpacity className="justify-center items-center px-6 py-2 rounded-full "
                        style={size == "small" ? { backgroundColor: themeColors.bgLight } : { backgroundColor: "#e6e6e6" }}
                        onPress={() => setsize("small")}
                    >
                        <Text className="text-base"
                            style={size != "small" ? { color: "black" } : { color: "white" }}
                        >
                            Small
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity className="justify-center items-center px-6 py-2 rounded-full "
                        style={size == "medium" ? { backgroundColor: themeColors.bgLight } : { backgroundColor: "#e6e6e6" }}
                        onPress={() => setsize("medium")}
                    >
                        <Text className="text-base"
                            style={size != "medium" ? { color: "black" } : { color: "white" }}
                        >
                            Medium
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity className="justify-center items-center px-6 py-2 rounded-full "
                        style={size == "large" ? { backgroundColor: themeColors.bgLight } : { backgroundColor: "#e6e6e6" }}
                        onPress={() => setsize("large")}
                    >
                        <Text className="text-base"
                            style={size != "large" ? { color: "black" } : { color: "white" }}
                        >
                            Large
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>

            <View className="m-4 flex-col">
                <Text className="text-xl font-medium">
                    About
                </Text>
                <Text className="text-sm text-slate-400">
                    {item.desc}
                </Text>
            </View>

            <View className="m-4 flex-row items-center justify-between ">
                <View className="flex-row items-center">

                    <Text className="text-xl font-medium text-slate-400 mr-2">
                        Volume:
                    </Text>
                    <Text className="text-base font-medium ">
                        {item.volume}
                    </Text>
                </View>
                <View className="flex-row border-2 items-center border-[#e6e6e6] w-[120] justify-evenly rounded-full px-4 py-1">
                    <TouchableOpacity
                        onPress={() => setCounter(prev => {
                            if (prev == 0) {
                                return 0
                            }
                            return prev - 1
                        }

                        )}
                    >
                        <MinusIcon size={20} strokeWidth={2} color={counter == 0 ? "#e6e6e6" : "black"} />
                    </TouchableOpacity>
                    <Text className="text-base"
                        style={{
                            color: themeColors.bgLight
                        }}
                    >
                        {counter}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setCounter(prev => prev + 1)}

                    >
                        <PlusIcon size={20} strokeWidth={2} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

            <View className="m-4 p-4 w-[70] justify-center items-center rounded-full border-2 border-[#e6e6e6]">
                <TouchableOpacity>
                    <ShoppingBagIcon size={30} strokeWidth={2} color={"#e6e6e6"} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default Product