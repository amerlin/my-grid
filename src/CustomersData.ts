export interface CustomerData {
    id: number, 
    descr1: string;
    descr2: string;
    address: string;
    city: string; 
    zip: string; 
    vat: string;
}

const customers: CustomerData[] = [
    {
        id: 1,
        descr1: "customer1",
        descr2: "description2",
        address: "",
        city: "",
        zip: "",
        vat: ""
    },
    {
        id: 2,
        descr1: "customer2",
        descr2: "description",
        address: "",
        city: "",
        zip: "",
        vat: ""
    },
    {
        id: 3,
        descr1: "customer3",
        descr2: "",
        address: "",
        city: "",
        zip: "",
        vat: ""
    },
    {
        id: 4,
        descr1: "customer4",
        descr2: "",
        address: "",
        city: "",
        zip: "",
        vat: ""
    }
];

export const getCustomersAsync = async():
Promise<CustomerData[]> =>{
    await wait(500);
    return customers;
}

const wait = (ms:number): Promise<void> => { return new Promise(resolve => setTimeout(resolve,ms));}