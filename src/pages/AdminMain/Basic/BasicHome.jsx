import React, { useState } from "react";

import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
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
  HiOutlineHome,
  HiOutlinePlusCircle,
  HiTrash,
  HiPencilAlt,
  HiOutlinePlusSm,
} from "react-icons/hi";
import HomeShareModal from "../../../components/modal/Basic/HomeShareModal";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const TABLE_HEAD = [
  "ลำดับ",
  "รหัสบ้านแชร์",
  "ชื่อบ้านแชร์",
  "สถานะ",
  "แก้ไข/ลบ",
];

const TABLE_ROWS = [
  {
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "นาย",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

const BasicHome = () => {
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (number) => (setOpen(!open), setId(number));

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
      <HomeShareModal handleOpen={handleOpen} open={open} id={id} />

      <div className="flex flex-col md:flex-row   items-center  md:justify-between gap-4">
        <div className="flex gap-2">
          <span>
            <HiOutlineHome size={24} color="black" />
          </span>{" "}
          <span className="text-xl text-black font-bold">
            {" "}
            จัดการข้อมูลบ้านแชร์
          </span>
        </div>

        <div className="flex gap-2 flex-col items-center   md:flex-row">
          <div className="w-72 bg-slate-50 rounded-md bg-gray-50   ">
            <Input variant="outlined" label="ค้นหาบ้านแชร์" color="purple" />
          </div>
          <div className="">
            <Button
              onClick={() => handleOpen(null)}
              variant="filled"
              color="purple"
              size="sm"
              className="text-sm  flex items-center gap-1  "
            >
              <HiOutlinePlusSm size={20}  />
              สร้างบ้านแชร์
            </Button>
          </div>
        </div>
      </div>

      <Card className=" h-[550px] w-full m-4 mx-auto shadow-lg   md:w-full  mt-8 ">
        <CardBody className="  px-2 -mt-4 overflow-scroll">
          <table className=" w-full  min-w-max table-auto text-left ">
            <thead className="  ">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y  border-blue-gray-100  bg-blue-gray-50 p-4"
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
                            size={20}
                            color="white"
                            className="cursor-pointer bg-purple-500 rounded-full w-8 h-8 p-1.5 "
                            onClick={() => handleOpen(1)}
                          />

                          <HiTrash
                            size={25}
                            color="white"
                            className="cursor-pointer bg-red-500 rounded-full w-8 h-8 p-1.5  "
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
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 ">
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

export default BasicHome;
