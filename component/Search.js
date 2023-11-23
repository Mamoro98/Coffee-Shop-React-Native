import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from "../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const Search = () => {
    return (
        <View className="rounded-full bg-[#e6e6e6] px-4 flex-row items-center ">
            <TextInput
                placeholder="Search.."
                className="p-4 font-semibold text-gray-700 text-lg flex-1"
            />
            <TouchableOpacity
                className="p-2  rounded-full"
                style={{ backgroundColor: themeColors.bgLight }}
            >
                <MagnifyingGlassIcon size={27} color="white" strokeWidth={2} />
            </TouchableOpacity>
        </View>
    )
}

export default Search