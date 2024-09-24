import { TbSmartHome } from "react-icons/tb";
import { BsLayoutSidebar } from "react-icons/bs";
import { LuFiles } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLinkSimpleLight } from "react-icons/pi";
export const data = [
  {
    key: "sub1",
    label: "Navigation One",
    icon: <TbSmartHome />,
    children: [
      {
        key: "g1",
        label: "Item 1",
        type: "group",
        children: [
          { key: "1", label: "Option 1" },
          { key: "2", label: "Option 2" },
        ],
      },
      {
        key: "g2",
        label: "Item 2",
        type: "group",
        children: [
          { key: "3", label: "Option 3" },
          { key: "4", label: "Option 4" },
        ],
      },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <BsLayoutSidebar />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <LuFiles />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "grp",
    label: "Group",
    type: "group",
    children: [
      { key: "13", label: "Option 13" },
      { key: "14", label: "Option 14" },
    ],
  },
];

export const detailedMenuItems = [
  {
    key: "1",
    label: "English",
    onClick: () => console.log("Detailed Item 1 clicked"),
    tailwindClasses: "text-red-500",
  },
  {
    key: "2",
    label: "French",
    onClick: () => console.log("Detailed Item 2 clicked"),
    tailwindClasses: "text-green-500",
  },
  // Add more items as needed
  {
    key: "3",
    label: "Arabic",
    onClick: () => console.log("Detailed Item 2 clicked"),
    tailwindClasses: "text-black",
  },
  // Add more items as needed
];
export const ReportsItems = [
  {
    key: "1",
    label: "View More",
    onClick: () => console.log("Detailed Item 1 clicked"),
    tailwindClasses: "text-red-500",
  },
  {
    key: "2",
    label: "Delete",
    onClick: () => console.log("Detailed Item 2 clicked"),
    tailwindClasses: "text-green-500",
  },
  // Add more items as needed

  // Add more items as needed
];

export const simpleMenuItems = [
  {
    key: "1",
    label: "Simple Item 1",
    onClick: () => console.log("Simple Item 1 clicked"),
    tailwindClasses: "text-blue-500",
  },
  {
    key: "2",
    label: "Simple Item 2",
    onClick: () => console.log("Simple Item 2 clicked"),
    tailwindClasses: "text-yellow-500",
  },
  // Add more items as needed
];
export const salesData = [
  {
    id: 1,
    country: "USA",
    amount: "$12,345k",
    status: "active",
    percentage: "12.5%",
    flag: "./img/usa.png",
  },
  {
    id: 2,
    country: "Canada",
    amount: "$8,567k",
    status: "active",
    percentage: "25.8%",
    flag: "./img/canada.png",
  },
  {
    id: 3,
    country: "Germany",
    amount: "$9,123k",
    status: "inactive",
    percentage: "5.4%",
    flag: "./img/germany.png",
  },
  {
    id: 4,
    country: "France",
    amount: "$7,890k",
    status: "active",
    percentage: "18.3%",
    flag: "./img/france.png",
  },
  {
    id: 5,
    country: "Australia",
    amount: "$6,456k",
    status: "inactive",
    percentage: "3.2%",
    flag: "./img/australia.png",
  },
  {
    id: 6,
    country: "Brazil",
    amount: "$5,789k",
    status: "active",
    percentage: "22.1%",
    flag: "./img/brazil.png",
  },
  {
    id: 7,
    country: "India",
    amount: "$10,234k",
    status: "inactive",
    percentage: "8.9%",
    flag: "./img/india.png",
  },
  {
    id: 8,
    country: "China",
    amount: "$11,567k",
    status: "active",
    percentage: "15.7%",
    flag: "./img/china.png",
  },
  {
    id: 9,
    country: "Japan",
    amount: "$9,876k",
    status: "inactive",
    percentage: "6.1%",
    flag: "./img/japan.png",
  },
  {
    id: 10,
    country: "South Korea",
    amount: "$8,123k",
    status: "active",
    percentage: "19.4%",
    flag: "./img/south-korea.png",
  },
];
export const CampaignData = [
  {
    id: 1,
    icon: <MdOutlineMailOutline />,
    title: "Email",
    count: "12,346",
    percentage: "0.3%",
    iconBg: "#dff7e9",
    iconColor: "#28c76f",
  },
  {
    id: 2,
    icon: <PiLinkSimpleLight />,
    title: "Opened",
    count: "15,678",
    percentage: "0.5%",
    iconBg: "#d9f8fc",
    iconColor: "#00cfe8",
  },
  {
    id: 3,
    icon: <PiLinkSimpleLight />,
    title: "Opened",
    count: "15,678",
    percentage: "0.5%",
    iconBg: "#d9f8fc",
    iconColor: "#00cfe8",
  },
  {
    id: 4,
    icon: <PiLinkSimpleLight />,
    title: "Opened",
    count: "15,678",
    percentage: "0.5%",
    iconBg: "#d9f8fc",
    iconColor: "#00cfe8",
  },
  {
    id: 5,
    icon: <PiLinkSimpleLight />,
    title: "Opened",
    count: "15,678",
    percentage: "0.5%",
    iconBg: "#d9f8fc",
    iconColor: "#00cfe8",
  },
  {
    id: 6,
    icon: <PiLinkSimpleLight />,
    title: "Opened",
    count: "15,678",
    percentage: "0.5%",
    iconBg: "#d9f8fc",
    iconColor: "#00cfe8",
  },
  {
    id: 7,
    icon: <PiLinkSimpleLight />,
    title: "Opened",
    count: "15,678",
    percentage: "0.5%",
    iconBg: "#d9f8fc",
    iconColor: "#00cfe8",
  },
  {
    id: 8,
    icon: <PiLinkSimpleLight />,
    title: "Opened",
    count: "15,678",
    percentage: "0.5%",
    iconBg: "#d9f8fc",
    iconColor: "#00cfe8",
  },
  // Devamını ekleyin
];
export const projects = [
  {
    name: "Website SEO",
    img: "./img/vue-label.png",
    date: "10 May 2021",
    leader: "Eileen",
    team: [
      { src: "./img/vue-label.png", alt: "Avatar" },
      { src: "./img/vue-label.png", alt: "Avatar" },
      { src: "./img/vue-label.png", alt: "Avatar" },
      { src: "./img/vue-label.png", alt: "Avatar" },
    ],
    progress: 38,
  },
  {
    name: "Social Banners",
    img: "./img/vue-label.png",
    date: "03 Jan 2021",
    leader: "Owen",
    team: [
      { src: "./img/vue-label.png", alt: "Avatar" },
      { src: "./img/vue-label.png", alt: "Avatar" },
    ],
    progress: 45,
  },
  {
    name: "Logo Designs",
    img: "./img/vue-label.png",
    date: "12 Aug 2021",
    leader: "Keith",
    team: [
      { src: "./img/vue-label.png", alt: "Avatar" },
      { src: "./img/vue-label.png", alt: "Avatar" },
      { src: "./img/vue-label.png", alt: "Avatar" },
      { src: "./img/vue-label.png", alt: "Avatar" },
    ],
    progress: 92,
  },
  {
    name: "IOS App Design",
    img: "./img/vue-label.png",
    date: "19 Apr 2021",
    leader: "Merline",
    team: [
      { src: "../../assets/img/avatars/2.png", alt: "Avatar" },
      { src: "../../assets/img/avatars/8.png", alt: "Avatar" },
      { src: "../../assets/img/avatars/5.png", alt: "Avatar" },
      { src: "../../assets/img/avatars/1.png", alt: "Avatar" },
    ],
    progress: 56,
  },
  {
    name: "Figma Dashboards",
    img: "./img/vue-label.png",
    date: "08 Apr 2021",
    leader: "Harmonia",
    team: [
      { src: "../../assets/img/avatars/9.png", alt: "Avatar" },
      { src: "../../assets/img/avatars/2.png", alt: "Avatar" },
      { src: "../../assets/img/avatars/4.png", alt: "Avatar" },
    ],
    progress: 25,
  },
];
