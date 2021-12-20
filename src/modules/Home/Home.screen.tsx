import React, { useEffect } from 'react'
import HomeLayout from './Home.layout'
import { useDispatch, useSelector } from 'react-redux';
import { getBeers } from '../../reducers/actions'

const Home = () => {
    const dispatch = useDispatch();
    const Beers = useSelector((state: any) => state.Beers);
    const BeersBanners = useSelector((state: any) => state.BeersBanners);
    const BeerBetter = useSelector((state: any) => state.BeerBetter);
    const load = useSelector((state: any) => state.load);

    useEffect(() => {
        dispatch(getBeers());
    }, []);

    return (
        <HomeLayout
            load={load}
            BeersBanners={BeersBanners}
            Beers={Beers}
            BeerBetter={BeerBetter}
        />
    )
}

export default Home
