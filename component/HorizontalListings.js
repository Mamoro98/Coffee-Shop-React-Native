import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react'
import { themeColors } from '../theme';

const HorizontalListings = ({ categories }) => {
    const [activeCat, setactiveCat] = useState(1);

    return (
        <View className="px-4 mt-6">
            <FlatList
                data={categories}
                keyExtractor={(c) => c.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                renderItem={({ item }) => {
                    const isActive = activeCat == item.id;
                    return (
                        <TouchableOpacity
                            className="mr-4  p-4 rounded-full"
                            style={
                                isActive
                                    ? { backgroundColor: themeColors.bgLight }
                                    : { backgroundColor: "#e6e6e6" }
                            }
                            onPress={() => setactiveCat(item.id)}
                        >
                            <Text
                                className="font-semibold text-lg"
                                style={isActive ? { color: "white" } : { color: "black" }}
                            >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

export default HorizontalListings