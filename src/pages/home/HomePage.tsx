import {Card} from "flowbite-react";
import {BASE_IMAGE_URL} from "../../utils/contants.ts";
import {getProduct} from "../admin/dashboard/api.ts";
import {useEffect, useState} from "react";
import {Product} from "../../types/Product.ts";

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        getProduct().then(
            (r) => {
                setProducts(r.data.data);
            }
        )
    },[])
    const ProductCard = (
        prop : {
            product : Product
        }
    ) => (
        <Card className="max-w-sm" imgAlt="Product image" imgSrc={BASE_IMAGE_URL + "/" + prop.product.image}>
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {prop.product.name}
                </h5>
            </a>
            <div className="mb-5 mt-2.5 flex items-center">
                {prop.product.description}
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{prop.product.price} VND</span>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Chi tiết                </a>
            </div>
        </Card>
    );

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* For demo purposes, rendering 6 cards */}
                {products.map((p , index) => (
                    <div key={index} className="flex justify-center">
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default HomePage;