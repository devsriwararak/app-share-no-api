import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/consts/Navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout, HiChevronDown } from "react-icons/hi";
import Swal from "sweetalert2";

const linkClasses =
  "flex item-center gap-3 font-light px-3 py-2 hover:bg-purple-200 hover:text-white   rounded-lg ";
const linkClassesSubMenu =
  "flex item-center gap-2 font-light px-3 py-1 hover:bg-purple-200 hover:text-white   rounded-lg ";

const Sidebar = ({ openSidebar, setOpenSideBar }) => {
  const [active, setActive] = useState(false);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const closePopup = () => {
    setOpenSideBar(!openSidebar);
  };

  const handleLogout = () => {
    Swal.fire({
      title: `ออกจากระบบ`,
      text: "คุณต้องการที่จะออกจากระบบ จริงหรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "gray",
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear(), (window.location.href = "/login");
      }
    });
  };

  return (
    <>
      <div
        className={`fixed top-0  h-full  left-0   p-3  text-white shadow-lg  bg-white z-50 overflow-y-scroll ${
          openSidebar
            ? "  md:block md:static  md:top-auto md:left-auto md:shadow-lg md:border-2   "
            : " hidden md:block  md:static   md:top-auto md:left-auto md:shadow-lg md:border-2   "
        }`}
      >
        <p className="">{JSON.stringify(open)}</p>
        <div className="flex items-center gap-2 px-1 py-2 justify-center ">
          <FaBeer fontSize={24} color="purple" />
          <span
            className="text-gray-700 font-bold text-lg cursor-pointer"
            onClick={closePopup}
          >
            APP-SHARE
          </span>
        </div>

        {/* <p className="text-black">{JSON.stringify(open)}</p> */}

        <div className="flex-1 py-5 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS?.map((item, index) => (
            <SidebarLink
              key={index}
              item={item}
              handleOpen={handleOpen}
              open={open}
              closePopup={closePopup}
            ></SidebarLink>
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-gray-400">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS?.map((item) => (
            <SidebarLink
              key={item?.key}
              item={item}
              openSidebar={openSidebar}
              setOpenSideBar={setOpenSideBar}
            />
          ))}

          <div
            className={classNames(
              "text-white cursor-pointer bg-red-500  ",
              "flex item-center gap-3 font-light px-3 py-2 hover:bg-red-700 hover:text-white   rounded-lg"
            )}
            onClick={handleLogout}
          >
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            ออกจากระบบ
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

function SidebarLink({ item, handleOpen, open, closePopup }) {
  const { pathname } = useLocation();
  let filteredData;
  let filteredData2;

  const check = () => {
    if (item?.submenuActive > 0) {
      handleOpen(item?.submenuActive);
    } else {
      closePopup();
    }
  };


  return (
    <div>
      {item.key == "noData" ? (
        ""
      ) : (
        <Link
          to={item.path}
          className={classNames(
            pathname === item.path
              ? "bg-purple-400 bg-opacity-20 text-purple-500 "
              : "text-gray-700",
            linkClasses
          )}
          onClick={check}
        >
          <span className="text-xl ">{item.icon}</span>
          {item.label}
          {item.submenuActive && (
            <span>
              <HiChevronDown size={20} />
            </span>
          )}
        </Link>
      )}

      {item?.submenuActive === 1 && open === 1 && (
        <ul>
          {item?.submenu?.map((dataItem, index) => (
            <Link
              key={index}
              to={dataItem.path}
              className={classNames(
                pathname === dataItem.path
                  ? "bg-purple-400  bg-opacity-20 text-purple-500  "
                  : "text-gray-700 ",
                linkClassesSubMenu
              )}
              onClick={closePopup}
            >
              <li
                className={classNames(
                  "text-gray-700 pl-8 cursor-pointer ",
                  linkClassesSubMenu
                )}
              >
                <span className="text-xl">{dataItem.icon}</span>
                {dataItem.label}
              </li>
            </Link>
          ))}
        </ul>
      )}

      {/* {item?.submenuActive === 2 &&
        ((filteredData = item?.submenu?.map((item) => {
          return item;
        })),
        open === 2 && (
          <ul className="text-xl text-red-500 ">
            {JSON.stringify(filteredData)}
          </ul>
        ))} */}

      {item?.submenuActive === 2 &&
        ((filteredData = item?.submenu?.map((item) => {
          return item;
        })),
        open === 2 && (
          <ul>
            {item?.submenu?.map((dataItem, index) => (
              <Link
                key={index}
                to={dataItem.path}
                className={classNames(
                  pathname === dataItem.path
                    ? "bg-purple-400  bg-opacity-20 text-purple-500  "
                    : "text-gray-700 ",
                  linkClassesSubMenu
                )}
                onClick={closePopup}
              >
                <li
                  className={classNames(
                    "text-gray-700 pl-8 cursor-pointer ",
                    linkClassesSubMenu
                  )}
                >
                  <span className="text-xl">{dataItem.icon}</span>
                  {dataItem.label}
                </li>
              </Link>
            ))}
          </ul>
        ))}
    </div>
  );
}
