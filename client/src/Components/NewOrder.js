import React, { useState } from 'react';
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/core";

const NewOrder = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        // axios.post(url + "/tasks", {
        //     description: input
        // }).then(response => {
        //     setInput("");
        //     setTasks([response.data, ...tasks])
        // }).catch(err => {
        //     console.log(err)
        // })
        console.log("hola")
    }

    return (
        <InputGroup size="md">
            <Input
                pr="4.5rem"
                type="text"
                placeholder="New order"
                value={input}
                onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                Add
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}

export default NewOrder;