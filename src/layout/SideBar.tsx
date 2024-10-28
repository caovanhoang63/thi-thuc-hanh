import {Sidebar} from "flowbite-react";
import {HiArrowSmLeft, HiChartPie, HiHome} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

export function SideBar() {
  const navigate = useNavigate();
  return (
      <Sidebar
          className={`h-full`}
          aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Items className={`h-full`}>
          <Sidebar.ItemGroup>
          <span className="cursor-pointer" onClick={() => navigate("/")}>
            <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
          </span>
            <span className="cursor-pointer" onClick={() => navigate("/home")}>
            <Sidebar.Item icon={HiHome}>Home</Sidebar.Item>
          </span>
            <span className="cursor-pointer" onClick={() => navigate("/login")}>
            <Sidebar.Item icon={HiArrowSmLeft}>Sign out</Sidebar.Item>
          </span>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
  );
}
