import React from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import { Button, Div as View, Image, Text } from "react-native-magnus";
import { Card, Loader } from '../../components';

const DetailsLayout = ({ load, item, handlerAddToCart, cart, navigation, cantidad }) => {
    if (load) return <Loader />
    return (
        <ScrollView>
            <View flex={1}>
                <View row justifyContent='center'>
                    <ImageBackground style={{ backgroundColor: 'black', flex: 1, padding: 20, }} source={{ uri: 'https://i.pinimg.com/564x/13/03/48/130348c9f1e8640754f73355ab4f0bcc.jpg' }} resizeMode='cover' blurRadius={30}>
                        <View justifyContent='center' alignItems='center'>
                            <Image source={{ uri: item.image_url }} resizeMode='contain' width={100} height={400} />
                        </View>
                        <View>
                            <Text fontSize={35} fontWeight='bold' color='white'>{item.name}</Text>
                            <Text fontSize={20} fontWeight='bold' color='white'>$ {(item.target_og * item.ph).toFixed(0)}</Text>
                            <Text fontSize={15} fontWeight='500' color='white'>Volume {item.volume.value}</Text>
                            <Text fontSize={15} fontWeight='500' color='white'>Year {item.first_brewed}</Text>
                            <Text fontSize={15} fontWeight='500' color='white'>Ph {item.ph}</Text>

                        </View>
                    </ImageBackground>
                </View>
                <Button color='white' bg='blue600' onPress={() => navigation.navigate('Cart')}>ir al carrito</Button>
                <Button color='white' bg='primary' onPress={() => handlerAddToCart(item.id)}>Agregar</Button>
                <Button color='white' bg='red700' onPress={() => navigation.goBack()}>volver</Button>
                <View>
                    {cart.length <= 0 ?
                        <Text>Carrito vacio</Text> :
                        <Text>Cantidad: {cantidad}</Text>
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailsLayout

