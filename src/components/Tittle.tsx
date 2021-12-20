import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Div as View,Text } from "react-native-magnus";

interface Props {
    titulo: string,
    second: string,
}

const Tittle = ({ titulo, second = 'ver más' }: Props) => {
    return (
        <View row alignItems='center' justifyContent='space-between'>
            <Text fontWeight='bold' fontSize={25} my={10}>{titulo}</Text>
            <TouchableOpacity>
                <Text color='secondary' fontWeight='600' fontSize={15} my={10}>{second}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tittle

