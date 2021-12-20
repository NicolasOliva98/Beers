import React from 'react';
import { ScrollView } from 'react-native';
import { Div as View } from "react-native-magnus";
import { Banners, Card, Header, List, Tittle, Loader } from '../../components';
import LinearGradient from 'react-native-linear-gradient'

const HomeLayout = ({ load, BeersBanners, Beers, BeerBetter }) => {
    if (load) return <Loader />
    return (
        <ScrollView>
            <View flex={1}>
                <LinearGradient colors={['#4f1929', '#922948', '#e9d3d9', 'white']}>
                    <Header title='Beers Shope' />
                    <View pt={10}>
                        <Banners data={BeersBanners} />
                    </View>
                </LinearGradient>
            </View>
            <View flex={1.2} bg='white'>
                <View px={10} mb={5}>
                    <Tittle titulo='Populares' second='ver más' />
                    <List data={Beers} />
                </View>
                <View px={10} mt={2}>
                    <Tittle titulo='Más vendida' second='ver más' />
                    <Card BeerBetter={BeerBetter} />
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeLayout

