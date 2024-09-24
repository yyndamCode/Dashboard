import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Aside.css";
import { LiaCircle, LiaDotCircle } from "react-icons/lia";

import { Logo } from "../Logo";
// import { data } from "../../service/data";
import { getFromLocalStorage, saveToLocalStorage } from "../../utilities/helps";
import { Menus } from "../menu";
export const Vuexy = () => {
  const [toggle, setToggle] = useState(true);
  const [enter, setEnter] = useState(false);
  const passive = "passive";

  useEffect(() => {
    const t = getFromLocalStorage("aside_type");
    if (t !== undefined && t != null) {
      setToggle(t === "true");
    }
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
    saveToLocalStorage("aside_type", !toggle);
  };

  return (
    <aside
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      className={`aside ${
        toggle ? "active" : passive
      } relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster`}
    >
      <ul>
        <li className="flex justify-between items-center">
          <Logo toggle={!toggle} />
          <button
            style={{ opacity: enter || toggle ? 1 : 0 }}
            onClick={handleToggle}
          >
            {toggle ? (
            <LiaDotCircle className="text-[24px]" />
            ) : (
              <LiaCircle className="text-[24px]" />
            )}
          </button>
        </li>
       <Menus/>
      </ul>
    </aside>
  );
};
