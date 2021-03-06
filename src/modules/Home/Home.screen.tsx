import React, { useEffect, useState } from 'react'
import HomeLayout from './Home.layout'
import { useDispatch, useSelector } from 'react-redux';
import { getDataBeers, getBeerDetails } from '../../reducers/actions'

const Home = ({ navigation }) => {
    const [isVisible, setVisible] = useState(false)
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
        <HomeLayout
            load={load}
            BeersBanners={BeersBanners}
            Beers={Beers}
            BeerBetter={BeerBetter}
            handlerNext={handlerNext}
            handlerGoCart={handlerGoCart}
            setVisible={setVisible}
            isVisible={isVisible}
        />
    )
}

export default Home
