import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import {
  HiOutlineUserAdd,
  HiOutlineChatAlt2,
  HiOutlinePlusCircle,
  HiPencilAlt,
  HiTrash,
  HiOutlineShoppingCart,
  HiOutlinePlusSm,
} from "react-icons/hi";
import AddUser from "../../../components/modal/User/AddUser";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const TABLE_HEAD = ["ลำดับ", "Amount", "Date", "Status", "แก้ไข/ลบ"];

const TABLE_ROWS = [
  {
    img: "https://img.freepik.com/free-photo/woman-holding-black-friday-shopping-bags_23-2149093528.jpg?w=826&t=st=1700725663~exp=1700726263~hmac=2ef6beba69c47d67e82f517049553fe922e07e9e1bafaad29d78fc5f1feb9cbc",
    name: "Spotify",
    amount: "1",
    date: "Wed 3:00pm",
    status: "นาย",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "2",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "3",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-google.svg",
    name: "Google",
    amount: "4",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "5",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "6",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "7",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

const User = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TABLE_ROWS.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(TABLE_ROWS.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: `ต้องการลบ ID : ${id}`,
      text: "คุณต้องการที่จะลบข้อมูลนี้ จริงหรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "gray",
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("ลบข้อมูลสำเร็จ");
      }
    });
  };

  return (
    <div className="">
      {/* <AdminModal handleOpen={handleOpen} open={open} /> */}

      <AddUser handleOpen={handleOpen} open={open} />

      <div className="flex flex-col md:flex-row    items-center justify-between gap-4">
        <div className="flex gap-2">
          <span>
            <HiOutlineShoppingCart size={24} color="black" />
          </span>{" "}
          <span className="text-xl text-black font-bold">
            {" "}
            จัดการข้อมูลลูกค้า
          </span>
        </div>

        <div className="flex gap-2 flex-col items-center   md:flex-row">
          <div className="w-full bg-slate-50 rounded-md bg-gray-50  ">
            <Input variant="outlined" label="ค้นหาชื่อ / รหัส" className="" />
          </div>
          <Button
            variant="filled"
            className="w-full flex items-center gap-2 text-sm"
            size="sm"
            color="purple"
            onClick={handleOpen}
          >
            <HiOutlinePlusSm size={20}  />
            เพิ่มลูกค้าใหม่
          </Button>
        </div>
      </div>

      <Card className=" h-[550px]  w-full mx-auto   md:w-full  mt-4 ">
        <CardBody className="  px-2 overflow-scroll -mt-4">
          <table className=" w-full  min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none opacity-90"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map(
                (
                  {
                    name,
                    amount,
                    date,
                    status,
                    account,
                    accountNumber,
                    expiry,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index} className="hover:bg-gray-200">
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={status}
                            color={
                              status === "paid"
                                ? "green"
                                : status === "pending"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {account.split("-").join(" ")} {accountNumber}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {expiry}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                      <div className="flex  gap-2 ">
                            <HiPencilAlt
                              size={24}
                              color="white"
                              className="cursor-pointer bg-purple-500 rounded-full w-8 h-8 p-1.5 "
                            />
                            <HiTrash
                              size={24}
                              color="white"
                              className="cursor-pointer bg-red-500 rounded-full w-8 h-8 p-1.5 "
                              onClick={() => handleDelete(2)}
                            />
                          </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            variant="outlined"
            size="sm"
            color="purple"
          >
            ก่อนหน้า
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <IconButton
                key={index}
                onClick={() => handlePageChange(index + 1)}
                variant="filled"
                size="sm"
                className={
                  currentPage == index + 1
                    ? "bg-purple-400"
                    : "bg-white text-black"
                }
              >
                {index + 1}
              </IconButton>
            ))}
          </div>
          <Button
            color="purple"
            onClick={() => handlePageChange(currentPage + 1)}
            variant="outlined"
            size="sm"
          >
            ถัดไป
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default User;
