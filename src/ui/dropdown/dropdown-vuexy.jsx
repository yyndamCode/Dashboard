import React, { useRef } from "react";
import {  Dropdown, Space } from "antd";
import CustomMenu from "./MenuItems";

const CustomDropdown = ({
  items,
  triggerText = "Dropdown",
  className,
  classTag,
}) => {

   const buttonRef = useRef(null);
  return (
    <Dropdown
      overlay={
        <div>
          <CustomMenu data={items} classTag={classTag} />
        </div>
      }
      trigger={["click"]}
      overlayClassName="absolute z-10"
    >
      <button ref={buttonRef} className={className}>
        <Space>{triggerText}</Space>
      </button>
    </Dropdown>
  );
};

export default CustomDropdown;
