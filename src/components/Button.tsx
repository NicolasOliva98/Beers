import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from "react-native-magnus";

interface Props {
    icon:string
}

const Button = ({icon}: Props) => {
    return (
        <>
            <TouchableOpacity style={styles.button}>
                <Icon fontSize={18} name={icon} color="white" fontFamily='Ionicons' />
            </TouchableOpacity>
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
