import {Button, Label, TextInput} from "flowbite-react";
import {login} from "./api.ts";
import {useState} from "react";
import {FullScreenSpinner} from "../../components/FullScreenSpinner.tsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {User} from "../../types/User.ts";

const LoginPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        login(
            formData.get("userName")?.toString(),
            formData.get("password")?.toString()
        )
            .then((r) => {
                if (r.status != 200 || !r.data.data) {
                    toast.error("Tên đăng nhập hoặc mật khẩu không đúng!");
                } else {
                    const user = r.data.data as User;
                    if (user.userRole == "Admin") {
                        navigate("/admin");
                    } else {
                        navigate("/");
                    }


                    toast.success("Đăng nhập thành công");
                }
            })
            .catch((e) => {
                toast.error("Tên đăng nhập hoặc mật khẩu không đúng!");
                console.log(e.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className={`w-full h-screen flex`}>
            <FullScreenSpinner loading={isLoading}/>
            <div className="space-y-6 h-fit w-80 m-auto">
                <form onSubmit={onSubmit}>
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
                                navigate("/register");
                            }}
                            className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                        >
                            Bạn chưa có tài khoảng?
                        </a>
                    </div>
                    <div className="w-full">
                        <Button type={"submit"} className={`m-auto w-full`}>
                            Đăng nhập
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
