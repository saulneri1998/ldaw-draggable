import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/core";
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { OrdersState } from '../atoms';

const NewOrder = () => {
    const url = "http://localhost:4000"
    const [input, setInput] = useState("");
    const [orders, setOrders] = useRecoilState(OrdersState);


    useEffect(() => {
        axios(url + '/orders').then(response => {
            console.log(response)
            setOrders(response.data);
        }).catch((err) => {console.log(err)})
    }, [setOrders]);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        axios.post(url + "/createOrder", {
            name: input
        }).then(response => {
            setInput("");
            setOrders([response.data, ...orders])
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <InputGroup width="50vw" mx="auto" size="md">
            <Input
                pr="4.5rem"
                type="text"
                placeholder="Nueva orden"
                bg="gray.700"
                color="white"
                value={input}
                onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" bg="teal.500" color="white" mr={2} onClick={handleClick}>
                Añadir
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}

export default NewOrder;