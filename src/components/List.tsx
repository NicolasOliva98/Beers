import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Div as View, Text, Image } from "react-native-magnus";


const List = ({ data, goTo }) => {
    const ItemsList = ({ index, item }) => {
        return (
            <TouchableOpacity onPress={() => goTo(item.id)}>
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
            </TouchableOpacity>
        )
    }
    return (
        <>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                initialNumToRender={4}
                data={data}
                renderItem={ItemsList}
                keyExtractor={(item) => String(item.id)}
            />
        </>
    )
}

export default List