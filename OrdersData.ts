export interface OrderData {
    id: number, 
    erpId : number,
    customerId: number,
    total: number,
    vat: number
}

const orders: OrderData[] = [
    {
        id: 1, 
        erpId:0,
        customerId:1,
        total:10000,
        vat:1000
    },
    {
        id: 2, 
        erpId:0,
        customerId:1,
        total:10000,
        vat:1000
    }
]