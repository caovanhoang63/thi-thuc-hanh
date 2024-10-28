import {Button, Label, Modal, TextInput} from "flowbite-react";
import {useState} from "react";
import {updateProduct} from "../api.ts";
import {toast} from "react-toastify";

export const  UpdateModal = (prop : {
    id?: number,
    open: boolean,
    close: () => void
}) => {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [image, setImage] = useState<string>("");


    const create = () => {
        if (!prop.id) {
            return
        }
        updateProduct(prop.id ,{
                image: image,
                price: price,
                name :name,
                description : description
            }
        ).then((result) => {
            if (result.status === 200) {
                toast.success("Product created!");
            }
        })
    }

    return <>
        <div>
            <Modal show={prop.open} size="md" popup onClose={prop.close}>
                <Modal.Header/>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">cập nhật sản phẩm</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value=" Tên "/>
                            </div>
                            <TextInput id="name" value={name} onChange={(e) => {
                                setName(e.target.value);
                            }} placeholder=" tên " required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="description" value=" Mô tả "/>
                            </div>
                            <TextInput id="description" type="text" value={description} onChange={(e) => {
                                setDescription(e.target.value);
                            }} required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="price" value="Giá"/>
                            </div>
                            <TextInput id="price" type="number" value={price} onChange={(e) => {
                                setPrice(parseInt(e.target.value));
                            }} required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="image" value="Hình"/>
                            </div>
                            <TextInput id="image" type="text" value={image} onChange={(e) => {
                                setImage(e.target.value);
                            }} required/>
                        </div>

                        <div className="w-full">
                            <Button type={"submit"} onClick={create}>  Thêm</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    </>
}