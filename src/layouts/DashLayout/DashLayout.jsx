import { Outlet } from "react-router-dom";
import SideMenu from "../../components/@Dash/SideMenu/SideMenu";

export default function DashLayout() {
  return (
    <div className="flex">
      <SideMenu />

      <main className="bg-gray-50 w-full h-screen overflow-auto py-2 px-[26px]">
        <Outlet />
      </main>
    </div>
  );
}
