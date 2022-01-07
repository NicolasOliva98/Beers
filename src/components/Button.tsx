import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Text, Div } from "react-native-magnus";
import { useSelector } from 'react-redux';

const Button = ({ icon, onPressLeft,onPressRight }) => {
    const { cantidad } = useSelector((state: any) => state);
    return (
        <>{
            icon == 'cart-outline' ?

                <TouchableOpacity style={styles.button} onPress={onPressRight}>
                    <Div bg='light' rounded='circle' h={15} w={15} position='absolute' top={0} right={2} justifyContent='center' alignItems='center'>
                        <Text fontSize={9} textAlign='center'>{cantidad}</Text>
                    </Div>
                    <Icon fontSize={18} name={icon} color="white" fontFamily='Ionicons' />
                </TouchableOpacity> :

                <TouchableOpacity style={styles.button} onPress={onPressLeft}>
                    <Icon fontSize={18} name={icon} color="white" fontFamily='Ionicons' />
                </TouchableOpacity>
        }

        </>

    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: 40,
        height: 40,
        borderRadius: 10
    }
})
