import axiosInstance from "../../../AxiosConfig.ts";
import {Product} from "../../../types/Product.ts";

export const getProduct = () => {
    return axiosInstance.get("/products");
};

export const createProduct = (product: Product) => {
    return axiosInstance.post("/products",product);
}

export const updateProduct = (id : number ,product: Product) => {
    return axiosInstance.post(`/products/${id}`, product);
}

export const deleteProduct = (id: number) => {
    return axiosInstance.delete(`/products/${id}`);
}

