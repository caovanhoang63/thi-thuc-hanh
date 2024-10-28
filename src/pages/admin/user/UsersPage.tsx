import {Table} from "flowbite-react";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {deleteProduct} from "../dashboard/api.ts";
import {getUser} from "./api.ts";
import {User} from "../../../types/User.ts";


const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        getUser().then(
            (r) => {
                setUsers(r.data.data);
            }
        )
    }, [])
    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>ID </Table.HeadCell>
                    <Table.HeadCell>Họ và tên </Table.HeadCell>
                    <Table.HeadCell>Tên đăng nhập </Table.HeadCell>
                    <Table.HeadCell>Quyền </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {users.map((user: User) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {user.id}
                            </Table.Cell>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.userName}</Table.Cell>
                            <Table.Cell>{user.userRole}</Table.Cell>

                            <Table.Cell>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    if (!user.id)
                                        return
                                    deleteProduct(user.id).then(
                                        r => {
                                            if (r.status === 200) {
                                                toast.success("Xoa thanh cong")
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

export default UsersPage;