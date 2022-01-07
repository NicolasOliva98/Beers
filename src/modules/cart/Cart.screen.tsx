import React from 'react'
import CartLayout from './Cart.layout'
import { useDispatch, useSelector } from 'react-redux';

const Details = ({ navigation }) => {
    const { load, cart, total, cantidad } = useSelector((state: any) => state);
    return (
        <CartLayout
            cantidad={cantidad}
            total={total}
            cart={cart}
            load={load}
            navigation={navigation}
        />
    )
}

export default Details
