import React from 'react';
import { ScrollView } from 'react-native';
import { Div as View } from "react-native-magnus";
import LinearGradient from 'react-native-linear-gradient'
import { Banners, Card, Header, List, Tittle, Loader, ModalInputSeach } from '../../components';

const HomeLayout = ({ load, BeersBanners, Beers, BeerBetter, handlerNext,handlerGoCart, setVisible, isVisible  }) => {
    if (load) return <Loader />
    return (
        <ScrollView>
            <View flex={1}>
                <LinearGradient colors={['#4f1929', '#922948', '#e9d3d9', 'white']}>
                    <Header title='Beers Shope' onPressLeft={()=> {}} onPressRight={() => handlerGoCart()} setVisible={()=> setVisible(true)}  />
                    <View pt={10}>
                        <Banners data={BeersBanners} goTo={handlerNext} />
                    </View>
                </LinearGradient>
            </View>
            <View flex={1.2} bg='white'>
                <View px={10} mb={5}>
                    <Tittle titulo='Populares' second='ver más' />
                    <List data={Beers} goTo={handlerNext} />
                </View>
                <View px={10} mt={2}>
                    <Tittle titulo='Más vendida' second='ver más' />
                    <Card BeerBetter={BeerBetter} />
                </View>
            </View>
            <ModalInputSeach isVisible={isVisible} setVisible={()=> setVisible(false)} />
        </ScrollView>
    )
}

export default HomeLayout

