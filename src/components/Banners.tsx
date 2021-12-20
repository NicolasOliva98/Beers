import React, { useState, FC } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Div as View } from "react-native-magnus";
import { W } from '../utils/Dimensions';
import {ItemsBanner} from './Items';

export type Props = {
    data: [],
}

const Banners: FC<Props> = ({
    data,
}) => {
    const [index, setIndex] = useState(0)
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