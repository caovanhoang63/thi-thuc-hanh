import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/Layout.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import DashboardPage from "./pages/admin/dashboard/DashboardPage.tsx";
import LoginPage from "./pages/home/LoginPage.tsx";
import RegisterPage from "./pages/home/RegisterPage.tsx";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
