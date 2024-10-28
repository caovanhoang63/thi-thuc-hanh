import "../index.css";
import { Navbar, NavbarBrand } from "flowbite-react";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar className={`p-0`} fluid rounded>
          <NavbarBrand>
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-16"
              alt="Shop bang do an"
              width={100}
              height={66}
            />
          </NavbarBrand>
        </Navbar>
      </header>
      <div className={`flex w-full h-full`}>
        <SideBar></SideBar>
        <div className={`flex-grow h-full px-20 pb-10`}>
          <Outlet />
        </div>
      </div>
      <footer></footer>
    </div>
  );
};
export default RootLayout;
