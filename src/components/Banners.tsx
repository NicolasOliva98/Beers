import React, { useState, FC } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native';
import { Div as View, Text, Image } from "react-native-magnus";
import { Rating } from 'react-native-ratings';
import { W } from '../utils/Dimensions';

export type Props = {
    data: [],
}

const Banners = ({ data, goTo }) => {
    const [index, setIndex] = useState(0)
    const ItemsBanner = ({ index, item }) => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => goTo(item.id)}>
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
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Carousel
                data={data}
                renderItem={ItemsBanner}
                autoplay={true}
                itemWidth={(W - 70)}
                sliderWidth={W}
                loop={true}
                onSnapToItem={(i) => setIndex(i)}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 10,
                    backgroundColor: '#922948',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )
}

export default Banners