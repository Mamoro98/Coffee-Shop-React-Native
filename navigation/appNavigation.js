import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, HeartIcon, ShoppingBagIcon, } from 'react-native-heroicons/outline'
import { HomeIcon as HomeIconSolid, HeartIcon as HeartIconSolid, ShoppingBagIcon as ShoppingBagIconSolid } from 'react-native-heroicons/solid'

import React from 'react'
import Home from '../screens/Home';
import { themeColors } from '../theme';
import Product from '../screens/Product';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


function HomeTabs() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({

                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => menuIcon(focused, route),
                tabBarStyle: {
                    marginBottom: 20,
                    borderRadius: 50,
                    backgroundColor: themeColors.bgLight,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 70,
                    marginHorizontal: 20,
                    elevation: 20,

                },
                tabBarIconStyle: {
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="favourite" component={Home} />
            <Tab.Screen name="cart" component={Home} />

        </Tab.Navigator>
    )
}

const menuIcon = (focused, route) => {
    let icon;
    if (route.name == 'Home') {
        icon = focused ? <HomeIconSolid size={30} color={themeColors.bgLight} /> : <HomeIcon size={30} color="white" strokeWidth={2} />
    }
    if (route.name == 'favourite') {
        icon = focused ? <HeartIconSolid size={30} color={themeColors.bgLight} /> : <HeartIcon size={30} color="white" strokeWidth={2} />
    }
    if (route.name == 'cart') {
        icon = focused ? <ShoppingBagIconSolid size={30} color={themeColors.bgLight} /> : <ShoppingBagIcon size={30} color="white" strokeWidth={2} />
    }
    let buttonClass = focused ? 'bg-white' : ''
    return (
        <View className={` ${buttonClass} flex items-center rounded-full p-3 shadow`}>
            {icon}
        </View>
    )
}

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: { backgroundColor: "white" }
                }}
            >
                <Stack.Screen name="Home1" component={HomeTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation