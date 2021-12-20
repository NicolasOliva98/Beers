import React from 'react'
import { Div as View, Icon, Text, Input} from "react-native-magnus";
import Button from './Button'

interface Props {
    title: string
}

const Header = ({
    title = 'Beers Shope'
}: Props) => {
    return (
        <>
            <View row justifyContent='space-between' px={10} pb={10}>
                <Button icon='ios-apps-sharp' />
                <Text fontSize={30} fontWeight='bold' color='white'>{title}</Text>
                <Button icon='cart-outline' />
            </View>
            <View px={30} justifyContent='center' alignItems='center'>
                <Input
                    editable={false}
                    rounded='circle'
                    shadow='sm'
                    bg='light'
                    placeholder="Search"
                    w={'100%'}
                    px={30}
                    //onPressIn={() => setVisible(true)}
                    prefix={<Icon fontSize={18} name="search" color="white" fontFamily="Feather" />}
                />
            </View>
        </>
    )
}

export default Header
