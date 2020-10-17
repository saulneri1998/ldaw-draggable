import React from 'react';
import { Box, Stack, Heading } from "@chakra-ui/core";
import { useDrop } from 'react-dnd'
import { OrdersState } from '../atoms';
import Order from './Order';
import ItemTypes from '../ItemTypes';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const DroppableSection  = ({ sectionName, type, height }) => {
    const url = "http://localhost:4000"
    const [orders, setOrders] = useRecoilState(OrdersState);

    const [, drop] = useDrop({
        accept: ItemTypes.ORDER,
        drop: (item) => {
            axios.post(url + "/changeStatus", {
                id: item.id,
                from: item.status,
                to: type
            }).then(response => {
                console.log(item)
                const index = orders.findIndex(order => order.id === item.id);
                let modified = JSON.parse(JSON.stringify(orders));
                modified[index].status = type;
                setOrders(modified)
            }).catch(err => {console.log(err)})
        },
    });

    return (
        <Stack border="1px solid balck">
            <Heading size="lg">{sectionName}</Heading>
            <Box height={height} bg="gray.700" ref={drop}>
                {orders.filter(o => o.status === type).map((o, index) => {
                    return <Order key={index} id={o.id} name={o.name} status={o.status}></Order>
                })}
            </Box>
        </Stack>
    );
}

export default DroppableSection;