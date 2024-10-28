import {Button, Table} from "flowbite-react";
import {useEffect, useState} from "react";
import {Product} from "../../../types/Product.ts";
import {deleteProduct, getProduct} from "./api.ts";
import {CreateModal} from "./Modal/Create.tsx";
import {toast} from "react-toastify";
import {UpdateModal} from "./Modal/Update.tsx";


const DashboardPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false)
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false)
    const [selected, setSelected] = useState<Product>();
    useEffect(() => {
        getProduct().then(
            (r) => {
                setProducts(r.data.data);
            }
        )
    }, [])

    const updateComplete = (id : number, product : Product ) => {
        setProducts(products.map((item) =>
            item.id === id ? product : item
        ));
    }

    const createComplete = (product : Product) => {
        setProducts([...products, product ]);
    }
    return (
        <div>
            <CreateModal onComplete={createComplete} open={openCreateModal} close={() => {
                setOpenCreateModal(false)
            }}></CreateModal>
            <UpdateModal onComplete={updateComplete} product={selected} open={openUpdateModal} close={() => {
                setOpenUpdateModal(false)
            }}></UpdateModal>
            <Button onClick={() => {
                setOpenCreateModal(true)
            }}>Thêm </Button>

            <Table>
                <Table.Head>
                    <Table.HeadCell>Tên sản phẩm</Table.HeadCell>
                    <Table.HeadCell>Mô tả</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {products.map((product: Product) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {product.name}
                            </Table.Cell>
                            <Table.Cell>{product.description}</Table.Cell>
                            <Table.Cell>"Category "</Table.Cell>
                            <Table.Cell>{product.price}</Table.Cell>
                            <Table.Cell>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    setSelected(product);
                                    setOpenUpdateModal(true);
                                }} href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    if (!product.id)
                                        return
                                    deleteProduct(product.id).then(
                                        r => {
                                            if (r.status === 200) {
                                                toast.success("Xoa thanh cong")
                                                setProducts(products.filter((item) => item.id !== product.id))
                                            } else {
                                                toast.error("Xoa that bai")
                                            }
                                        }
                                    );
                                }} href="#" className="font-medium text-red-400 hover:underline dark:text-red-500">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    ))
                    }
                </Table.Body>
            </Table>
        </div>
    );
}

export default DashboardPage;