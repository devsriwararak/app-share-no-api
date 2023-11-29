import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiChevronRight,
  HiOutlineLocationMarker,
  HiDatabase,
  HiOutlineChartSquareBar,
  HiOutlineUserGroup,
  HiOutlineUserCircle,
  HiOutlineUserAdd,
  HiOutlinePlay,
} from "react-icons/hi";
let Type = localStorage.getItem("Type");

export const DASHBOARD_SIDEBAR_LINKS =
  Type == "main-admin" || Type == "admin" // MAIN_ADMIN - ADMIN
    ? [
        {
          key: "dashboard",
          label: Type,
          path: "/admin",
          icon: <HiOutlineViewGrid />,
        },
        {
          key: "basicHome",
          label: "ข้อมูลพื้นฐาน",
          icon: <HiOutlineCube />,
          submenuActive: 1,
          submenu: [
            {
              label: "ข้อมูลบ้านแชร์",
              key: "basicHome_1",
              path: "/admin/basic/home",
              icon: <HiChevronRight />,
            },
            {
              label: "ข้อมูลวงค์แชร์",
              key: "basicHome_2",
              path: "/admin/basic/wong",
              icon: <HiChevronRight />,
            },
          ],
        },
        Type == "admin"
          ? { key: "noData" }
          : {
              key: "CrudAdmin",
              label: "ข้อมูลผู้ดูแลระบบ",
              path: "/admin/crud-admin",
              icon: <HiOutlineUsers />,
            },

        {
          key: "ManageBasicHome",
          label: "บ้านแชร์-พนักงาน",
          path: "/admin/home-share",
          icon: <HiDatabase />,
        },
        {
          key: "ManageUser",
          label: "ข้อมูลลูกค้า",
          path: "/admin/manage-user",
          icon: <HiOutlineShoppingCart />,
        },
      ]
    : Type == "user" // USER
    ? [
        {
          key: "dashboard",
          label: "ภาพรวม",
          path: "/user",
          icon: <HiOutlineViewGrid />,
        },
        {
          key: "addToWongShare",
          label: "ขอเข้าวงค์แชร์",
          path: "/user/add-to-wong-share",
          icon: <HiOutlineUserAdd />,
        },
        {
          key: "myHomeShare",
          label: "บ้านแชร์ของฉัน",
          path: "/user/my-wong",
          icon: <HiOutlineLocationMarker />,
        },
        {
          key: "user-report",
          label: "รายงาน",
          path: "/admin",
          icon: <HiOutlineChartSquareBar />,
        },
      ]
    : Type == "home" || Type == "member" // HOME
    ? [
        {
          key: "home-dashboard",
          label: "ภาพรวม",
          path: "/home",
          icon: <HiOutlineViewGrid />,
        },
        {
          key: "home-homeShare",
          label: "ลูกแชร์",
          path: "/home/manage-user",
          icon: <HiOutlineUserCircle />,
        },
        {
          key: "home-homeShare",
          label: "วงแชร์",
          path: "/home/wong-share",
          icon: <HiOutlineCube />,
        },
        Type == "home" ? {
          key: "home-homeShare",
          label: "พนักงาน",
          path: "/home/member",
          icon: <HiOutlineUserGroup />,
        } : {key: "noData"},
        {
          key: "play-share",
          label: "เล่นแชร์",
          path: "/home/play",
          icon: <HiOutlinePlay />,
        },
        {
          key: "home-homeShare",
          label: "รายงาน",
          path: "/home/report",
          icon: <HiOutlineChartSquareBar />,
        },
      ]
    : Type == "member"
    ? [
        {
          key: "dashboard",
          label: "member",
          path: "/admin",
          icon: <HiOutlineViewGrid />,
        },
      ]
    : [];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "ข้อมูลส่วนตัว",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];
