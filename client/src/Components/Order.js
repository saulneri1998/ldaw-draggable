import React from 'react';
import { Box } from "@chakra-ui/core";
import { useDrag } from 'react-dnd'
import ItemTypes from '../ItemTypes';

const Order  = ({ id, name, status }) => {

    const [, drag] = useDrag({
        item: { 
            type: ItemTypes.ORDER,
            id: id,
            status: status
        },
    })

    return (
        <Box p="4px" m="4px" bg="teal.500" color="white" ref={drag}>{name}</Box>
    );
}

export default Order;