import axiosInstance from "../../../AxiosConfig.ts";

export const getUser = () => {
    return axiosInstance.get("/users");
};

