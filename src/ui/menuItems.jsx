import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { TbSmartHome } from "react-icons/tb";
import { PiCircleBold } from "react-icons/pi";

export const items = [
  {
    key: "1",
    icon: <TbSmartHome />,
    label: "Tableaux de bord",
    children: [
      { key: "11",  label: "Option 1" },
      { key: "12",  label: "Option 2" },
      { key: "13",  label: "Option 3" },
      { key: "14",  label: "Option 4" },
    ],
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: "Navigation Two",
    children: [
      { key: "21", label: "Option 1" },
      { key: "22", label: "Option 2" },
      {
        key: "23",
        label: "Submenu",
      },
      {
        key: "24",
        label: "Submenu 2",
      },
    ],
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Navigation Three",
    children: [
      { key: "31", label: "Option 1" },
      { key: "32", label: "Option 2" },
      { key: "33", label: "Option 3" },
      { key: "34", label: "Option 4" },
    ],
  },
];

export const getLevelKeys = (items) => {
  const key = {};
  const func = (items, level = 1) => {
    items.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items);
  return key;
};
