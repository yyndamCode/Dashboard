import { Header } from "./Header";
import { Vuexy } from "../ui/Vuexy/Vuexy";
import { Outlet } from "react-router-dom";
export const VuexyLayout = () => {
  return (
    <div className="block relative w-full">
      <div className="flex">
        <div className="relative h-screen flex flex-row flex-wrap">
          <Vuexy />
        </div>
        <div className="w-full">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
