import React from 'react';
import { Box, Stack } from "@chakra-ui/core";
import { useDrop } from 'react-dnd'
import { OrdersState } from '../atoms';
import Order from './Order';
import ItemTypes from '../ItemTypes';
import { useRecoilState } from 'recoil';

const DroppableSection  = ({ sectionName, type, height }) => {
    const [orders, setOrders] = useRecoilState(OrdersState);

    const [, drop] = useDrop({
        accept: ItemTypes.ORDER,
        drop: (item) => {
            console.log(item)
            const index = orders.findIndex(order => order.id === item.id);
            let modified = JSON.parse(JSON.stringify(orders));
            modified[index].status = type;
            setOrders(modified)
        },
    });

    return (
        <Stack border="1px solid balck">
            <Box>{sectionName}</Box>
            <Box height={height} bg="tomato" ref={drop}>
                {orders.filter(o => o.status === type).map((o, index) => {
                    return <Order key={index} id={o.id} name={o.name}></Order>
                })}
            </Box>
        </Stack>
    );
}

export default DroppableSection;