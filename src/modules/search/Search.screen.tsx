import React, { useEffect } from 'react'
import SearchLayout from './Search.layout'
import { useDispatch, useSelector } from 'react-redux';
import { getDataBeers, getBeerDetails } from '../../reducers/actions'

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const { Beers, BeersBanners, BeerBetter, load } = useSelector((state: any) => state)
    useEffect(() => {
        dispatch(getDataBeers());
    }, []);

    const handlerNext = (id) => {
        dispatch(getBeerDetails(id))
        navigation.navigate('Details')
    }
    const handlerGoCart = () => {
        navigation.navigate('Cart')
    }
    return (
        <SearchLayout
            load={load}
            BeersBanners={BeersBanners}
            Beers={Beers}
            BeerBetter={BeerBetter}
            handlerNext={handlerNext}
            handlerGoCart={handlerGoCart}
        />
    )
}

export default Home
