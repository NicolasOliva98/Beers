import React from 'react'
import DetailsLayout from './Details.layout'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../reducers/actions'

const Details = ({navigation}) => {
    const dispatch = useDispatch();
    const { load, BeerDetails, cart, cantidad } = useSelector((state: any) => state);

    const handlerAddToCart = (item) => {
        dispatch(addToCart(item))        
    }

    return (
        <DetailsLayout
            cantidad={cantidad}
            cart={cart}
            load={load}
            item={BeerDetails}
            handlerAddToCart={handlerAddToCart}
            navigation={navigation}
        />
    )
}

export default Details
