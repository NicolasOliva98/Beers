import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Div as View, Text } from "react-native-magnus";

const Loader = () => {
    return (
        <View flex={1} bg='white' justifyContent='center' alignItems='center'>
            <ActivityIndicator color='black' size='large' />
            <Text>Cargando...</Text>
        </View>
    )
}

export default Loader