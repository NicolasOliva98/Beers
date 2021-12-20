import React from 'react'
import { FlatList } from 'react-native'
import {ItemsList} from './Items'
interface Props {
    data: []
}

const List = ({ data }: Props) => {
    return (
        <>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={ItemsList}
                keyExtractor={(item) => String(item.id)}
            />
        </>
    )
}

export default List