export interface Product {
    _id: number;
    title: string;
    description: string;
    oldPrice: number;
    price: number;
    brand: string;
    image: string;
    isNew: boolean;
    category: string;
    quantity: number;
}
[];

export interface Item {
    _id: number;
    title: string;
    description: string;
    oldPrice: number;
    price: number;
    brand: string;
    image: string;
    isNew: boolean;
    category: string;
    quantity: number;
}

export interface StoreProduct {
    _id: number;
    title: string;
    description: string;
    oldPrice: number;
    price: number;
    brand: string;
    image: string;
    isNew: boolean;
    category: string;
    quantity: number;
}

export interface UserInfo {
_id:string;
name:string;
email:string;
}