import axiosInstance from "../../AxiosConfig.ts";

export const login = (userName?: string, password?: string) => {
    return axiosInstance.post("users/login", { userName: userName, password: password });
};

export const register = (name?: string,userName?: string, password?: string) => {
    return axiosInstance.post("users/register", {name: name,userName: userName, password: password});
}
