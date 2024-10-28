import {Button, Label, TextInput} from "flowbite-react";
import {register} from "./api.ts";
import {useState} from "react";
import {FullScreenSpinner} from "../../components/FullScreenSpinner.tsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        register(
            formData.get("name")?.toString(),
            formData.get("userName")?.toString(),
            formData.get("password")?.toString()
        )
            .then((r) => {
                if (r.status != 200) {
                    toast.error("Đăng ký thất bại");
                } else {
                    navigate("/login");
                    toast.success("Đăng ký thành công");
                }
            })
            .catch((e) => {
                toast.error("Đăng ký thất bại");
                console.log(e.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className={`w-full h-screen flex`}>
            <FullScreenSpinner loading={isLoading} />
            <div className="space-y-6 h-fit w-80 m-auto">
                <form onSubmit={onSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Họ và tên"/>
                        </div>
                        <TextInput
                            name="name"
                            id="name"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="userName" value="Tên đăng nhập"/>
                        </div>
                        <TextInput
                            name="userName"
                            id="userName"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Mật khẩu "/>
                        </div>
                        <TextInput name="password" id="password" type="password" required/>
                    </div>
                    <div className="">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/login");
                            }}
                            className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                        >
                            Quay về đăng nhập
                        </a>
                    </div>
                    <div className="w-full">
                        <Button type={"submit"} className={`m-auto w-full`}>
                            Đăng ký
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
