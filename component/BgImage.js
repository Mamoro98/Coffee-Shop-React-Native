import { View, Text, Image } from 'react-native'
import React from 'react'

const BgImage = ({ styles, height, imageurl, opacity }) => {
    return (
        <Image
            source={imageurl}
            className="absolute -top-5 w-full "
            style={{
                ...styles,
                height: height,
                opacity: opacity
            }}
        />
    )
}

export default BgImage