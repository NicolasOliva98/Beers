import React from 'react'
import { Div as View, Text, Image } from 'react-native-magnus';
import { W } from '../utils/Dimensions'
interface Props {
    BeerBetter: {}
}

const Card = ({ BeerBetter }: Props) => {
    return (
        <View
            rounded='xl'
            shadow='sm'
            bg='white'
            mt={25}
            h={W / 3.4}
            p={10}
        >
            <View row>
                <View flex={0.3}>
                    <Image 
                        style={{ transform: [{ rotate: '15deg' }] }}
                        position='absolute'
                        top={-30}
                        source={{ uri: BeerBetter.image_url }}
                        resizeMode='contain'
                        width={50}
                        height={125}
                    />
                </View>
                <View flex={1} mt={25}>
                    <Text fontWeight='800' fontSize={25} color='black'>{BeerBetter.name}</Text>
                    <Text fontWeight='300' fontStyle='italic' color='secondary'>Elaboración: {BeerBetter.first_brewed}</Text>
                </View>
                <View flex={0.4} mt={25}>
                    <Text
                        color='secondary'
                        fontSize={20}
                        fontWeight='bold'
                        style={{}}>
                        $ {(BeerBetter.target_og * BeerBetter.ph).toFixed(0)}
                    </Text>
                    <Text
                        color='yellow600'
                        fontSize={18}
                        fontWeight='bold'>{BeerBetter.star} ★</Text>
                </View>
            </View>

        </View>
    )
}

export default Card;