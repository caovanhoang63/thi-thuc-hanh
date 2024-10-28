import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layout/Layout.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import DashboardPage from "./pages/admin/dashboard/DashboardPage.tsx";
import LoginPage from "./pages/home/LoginPage.tsx";
import RegisterPage from "./pages/home/RegisterPage.tsx";
import UsersPage from "./pages/admin/user/UsersPage.tsx";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>
                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="admin" element={<DashboardPage/>}/>
                    <Route path="admin/user" element={<UsersPage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
export default AppRoute;
