import React from 'react';
import { Box } from "@chakra-ui/core";
import { useDrag } from 'react-dnd'
import ItemTypes from '../ItemTypes';

const Order  = ({ id, name, status }) => {

    const [, drag] = useDrag({
        item: { 
            type: ItemTypes.ORDER,
            id: id,
        },
    })

    return (
        <Box bg="teal.300" ref={drag}>{name}</Box>
    );
}

export default Order;