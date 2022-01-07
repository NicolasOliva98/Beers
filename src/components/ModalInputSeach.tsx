import React, { useState } from 'react'
import { TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchBeer } from '../reducers/actions'
import { Div as View, Input, Icon, Modal, Button, Text, Image } from 'react-native-magnus';


const ModalInputSeach = ({ isVisible, setVisible }) => {

    const _renderVoid = () => {
        return (
            <View justifyContent='center'>
            </View>
        )
    }


    const dispatch = useDispatch();
    const { BeersSearch } = useSelector((state: any) => state);

    const handleChangeText = (t) => {
        dispatch(searchBeer(t))
    }

    const handleCloseModal = () => {
        setVisible(false)
        dispatch(searchBeer(''))
    }

    return (
        <Modal
            hardwareAccelerated={true}
            isVisible={isVisible}
            animationIn='zoomInUp'
            animationOut='zoomOutUp'
        >
            <View flex={1} p={10}>
                <View row>
                    <Input
                        autoFocus={true}
                        rounded={10}
                        h={35}
                        py={0}
                        color='black'
                        bg='rgb(189,195,199)'
                        focusBorderColor='rgba(0,0,0,0)'
                        placeholder="Buscar"
                        placeholderTextColor='white'
                        selectionColor='grey'
                        w={'80%'}
                        onChangeText={t => handleChangeText(t)}
                        prefix={<Icon fontSize={18} name="search" color="white" fontFamily="Feather" />}
                    />
                    <View w={'20%'} justifyContent='center' alignItems='center'>
                        <TouchableOpacity onPress={handleCloseModal}>
                            <Text color='black'>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View mt={10}>
                    {
                        BeersSearch.length <= 0 ? null :
                            <FlatList
                                data={BeersSearch}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity key={index} activeOpacity={0.7}>
                                        <View row p={4} alignItems='center'>
                                            <Image source={{ uri: item.image_url }} resizeMode='contain' width={30} height={70} />
                                            <Text fontSize={14} fontWeight='600'>{item.name}</Text>
                                            <Icon fontSize={18} name="search" color="black" fontFamily="Feather" />
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                    }
                </View>

            </View>
        </Modal>

    )
}

export default ModalInputSeach
