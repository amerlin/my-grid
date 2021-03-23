export interface ProductData {
    productId: number;
    description: string;
    barcode: string;
    price: number;
    total: number;
    qta: number;
}

const products: ProductData[] = [
    {
        productId: 1,
        description: "prod001",
        barcode: "bar001",
        price: 10,
        total: 10,
        qta: 1
    },
    {
        productId: 2,
        description: "prod002",
        barcode: "bar001",
        price: 10,
        total: 10,
        qta: 1
    },
    {
        productId: 3,
        description: "prod003",
        barcode: "bar001",
        price: 10,
        total: 10,
        qta: 1
    },
    {
        productId: 4,
        description: "prod004",
        barcode: "bar001",
        price: 10,
        total: 10,
        qta: 1
    },
];

export const getProductsAsync = async():
Promise<ProductData[]> =>{
    await wait(500);
    return products;
}

export const getProducts = (): ProductData[] =>{
    return products;
}

const wait = (ms:number): Promise<void> => { return new Promise(resolve => setTimeout(resolve,ms));}