import { Popover, Transition, Menu } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
  HiOutlineMenu,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Header = ({ openSidebar, setOpenSideBar }) => {
  const navigate = useNavigate();

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
    <div className=" bg-white  h-16  flex justify-between items-center border-b-2 border-gray-200 shadow-sm fixed w-full md:w-10/12 z-10  ">
      <div className="mx-4 text-black">
      { `${localStorage.getItem('name')}  (${localStorage.getItem("status")})`}
      </div>

      <HiOutlineMenu
        color="black"
        size={30}
        className="mr-4 cursor-pointer md:hidden "
        onClick={() => setOpenSideBar(!openSidebar)}
      />

      <div className="flex items-center gap-2 mr-6">
        <Popover className="">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-200",
                  "p-1.5 inline-flex items-center text-gray-700 hover:text-opacity-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-e-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2">This is messages panel</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-200",
                  "p-1.5 inline-flex items-center text-gray-700 hover:text-opacity-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-e-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2">This is messages panel</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative ">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:ring-2 focus:ring-neutral-400 ">
              <span className="sr-only">Oprn user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://img.freepik.com/free-photo/people-technology-concept-smiling-asian-girl-using-smartphone-texting-mobile-phone-standing-against-white-background_1258-89474.jpg?w=740&t=st=1699023939~exp=1699024539~hmac=b35c4ea6ba09d1deb11cf8323f2da4363deeee3f8b3ee61cf77030c20973633f")',
                }}
              >
                <span className="sr-only">Hi Jackson</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5  ">
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-200",
                      "text-gray-800 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => navigate("/profile")}
                  >
                    ข้อมูลส่วนตัว
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-200",
                      "text-gray-800 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => navigate("/setting")}
                  >
                    ตั้งค่า
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-red-500 text-white",
                      "text-gray-800 focus:bg-red-500 cursor-pointer rounded-sm px-4  py-2"
                    )}
                    onClick={handleLogout}
                  >
                    ออกจากระบบ
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
