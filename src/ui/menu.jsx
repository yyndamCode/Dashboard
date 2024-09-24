

import React, { useState } from 'react'
import { Menu } from 'antd';
import { getLevelKeys, items } from './menuItems';
const levelKeys = getLevelKeys(items);
export const Menus = () => {
     const [stateOpenKeys, setStateOpenKeys] = useState(["1", "23"]);
  const [current, setCurrent] = useState('11');
     const onOpenChange = (openKeys) => {
       const currentOpenKey = openKeys.find(
         (key) => stateOpenKeys.indexOf(key) === -1
       );
       // open
       if (currentOpenKey !== undefined) {
         const repeatIndex = openKeys
           .filter((key) => key !== currentOpenKey)
           .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
         setStateOpenKeys(
           openKeys
             // remove repeat key
             .filter((_, index) => index !== repeatIndex)
             // remove current level all child
             .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
         );
       } else {
         // close
         setStateOpenKeys(openKeys);
       }
     };
       const onClick = (e) => {
         console.log("click ", e);
         setCurrent(e.key);
       };
  return (
    <div className="flex flex-col justify-between items-center pt-6 ">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        openKeys={stateOpenKeys}
        onClick={onClick}
        onOpenChange={onOpenChange}
        // style={{ width:"100%",background:"transparent" }}
        className="w-full bg-transparent custom-menu "
        items={items}
        selectedKeys={[current]}
      />
    </div>
  );
}
