export interface Product {
    id?: number;
    name: string,
    description: string,
    price: number,
    image: string,
}
export type Nullable<T> = T | null