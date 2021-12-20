import React from 'react'
import { Div as View, Text, Image } from "react-native-magnus";
import { Rating } from 'react-native-ratings';
import { W } from '../utils/Dimensions'

interface Props {
    index: number,
    item: {
        name: string,
        target_og: number,
        ph: number,
        image_url: string,
        first_brewed: string
        id: number,
        star:number
    },
}

export const ItemsBanner = ({ index, item }: Props) => {
    return (
        <View
            key={index}
            rounded='xl'
            shadow='xs'
            bg='white'
            mt={40}
            h={W / 2.4}
            p={10}
        >
            <View flex={1}>
                <Text fontWeight='800' fontSize={30} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                <Text
                    color='secondary'
                    fontSize={20}
                    fontWeight='bold'>
                    $ {(item.target_og * item.ph).toFixed(0)}
                </Text>
                <Rating
                    type='star'
                    readonly={true}
                    ratingColor='#3498db'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={5}
                    startingValue={item.star}
                    imageSize={22}
                    showRating={false}
                    style={{ position: 'absolute', left: 0, bottom: -25 }}
                />
            </View>
            <View
                key={index}
                flex={1}
                justifyContent='center'
                alignItems='flex-end'>
                <Image position='absolute' top={-110} source={{ uri: item.image_url }} resizeMode='contain' width={60} height={195} />
            </View>
            <Text fontWeight='500' fontStyle='italic' color='secondary'>Elaboración: {item.first_brewed}</Text>
        </View>
    )
}

export const ItemsList = ({ index, item }: Props) => {
    return (
        <View
            key={index}
            flex={1}
            rounded='xl'
            justifyContent='center'
            alignItems='center'
            shadow='xs'
            bg='white'
            mt={40}
            mb={2}
            mx={10}
            w={140}
            h={140}
        >
            <View
                key={index}
                flex={1}
                justifyContent='center'
                alignItems='flex-end'>
                <Image position='absolute' top={-50} source={{ uri: item.image_url }} resizeMode='contain' width={40} height={145} />
            </View>
            <Text
                color='secondary'
                fontSize={25}
                fontWeight='bold'
                style={{ transform: [{ rotate: '-90deg' }], position: 'absolute', top: 40, right: -10 }}>
                $ {(item.target_og * item.ph).toFixed(0)}
            </Text>
            <Text style={{ position: 'absolute', bottom: 10, left: 10, fontSize: 14, fontWeight: '700' }}>{item.name}</Text>
        </View>
    )
}

