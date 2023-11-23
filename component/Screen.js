import { SafeAreaView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import GolbalStyles from './GolbalStyles';


const Screen = ({ children }) => {
    let pad = Constants.statusBarHeight

    return (
        <SafeAreaView style={GolbalStyles.droidSafeArea}

        >
            {children}
        </SafeAreaView >
    )
}



export default Screen