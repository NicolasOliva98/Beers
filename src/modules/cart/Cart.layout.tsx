import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Div as View, Image, Text } from "react-native-magnus";
import { Card, Loader } from '../../components';

const CartLayout = ({ load, cart, navigation, total, cantidad }) => {
    if (load) return <Loader />
    return (
        <ScrollView>
            <View flex={1} p={10}>
                <Button color='white' bg='green700' onPress={() => navigation.goBack()}>volver</Button>
                {
                    cart.length <= 0 ?
                        <>
                            <Text>Carrito vacio</Text>
                            <Text>Total: {(total).toFixed(0)} / Cantidad: {cantidad}</Text>
                        </> :
                        <>
                            <Text>Total: {(total).toFixed(0)}  / Cantidad: {cantidad}</Text>
                            <View p={10} justifyContent='center'>
                                {
                                    cart.map((item, i) => {
                                        return (
                                            <View row key={i} p={5}>
                                                <Image source={{ uri: item.image_url }} resizeMode='contain' width={50} height={90} />
                                                <View>
                                                    <Text fontSize={20} fontWeight='bold'>{item.name}</Text>
                                                    <Text fontSize={15} fontWeight='bold'>${(item.target_og * item.ph).toFixed(0)}</Text>
                                                    <Text fontSize={15} fontWeight='700'>Cantidad {item.cantidad}</Text>
                                                    <Text fontSize={15} fontWeight='700'>Sub total: $ {(item.cantidad * item.ph).toFixed(0)}</Text>
                                                </View>
                                            </View>
                                        )
                                    }
                                    )
                                }
                            </View>
                        </>
                }
            </View>
        </ScrollView>
    )
}

export default CartLayout

