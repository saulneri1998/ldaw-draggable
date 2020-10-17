import { atom } from 'recoil';

export const OrdersState = atom({
    key: "OrdersState",
    default: [{
            id: 1,
            name: "hola1",
            status: 1
        },
        {
            id: 2,
            name: "hola1",
            status: 1
        },
        {
            id: 3,
            name: "hola2",
            status: 2
        },
        {
            id: 4,
            name: "hola3",
            status: 3
        }
    ]
})