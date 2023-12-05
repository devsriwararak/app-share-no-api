import React, { useEffect, useState } from "react";
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
import axios from "axios";

import DataTable from 'react-data-table-component';

const columns = [
  {
      name: 'Title',
      selector: row => row.title,
  },
  {
      name: 'Year',
      selector: row => row.year,
  },
];

const dataTest = [
  {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
  },
  {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
  },
]


const TABLE_HEAD = [
  "ลำดับ",
  "รหัส",
  "ชื่อ-สกุล",
  "เบอร์โทร",
  "Username",
  "แก้ไข/ลบ",
];

const User = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // State
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dataToModal, setDataToModal] = useState({});


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_API}/u-search?name=${search}`
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
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
        deleteRow(id)
      }
    });
  };

  const deleteRow = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_APP_API}/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      toast.success("ลบข้อมูลสำเร็จ");
      fetchData()
    } catch (error) {
      console.log(error);
    }
  };

  const handleDataToModal = (item) => {
    console.log(item);
    setDataToModal(item);
    handleOpen()
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div className="">
      {/* <AdminModal handleOpen={handleOpen} open={open} /> */}

      <AddUser handleOpen={handleOpen} open={open} fetchData={fetchData} dataToModal={dataToModal} />

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
            onClick={() => (handleOpen(), setDataToModal({}))}
          >
            <HiOutlinePlusSm size={20} />
            เพิ่มลูกค้าใหม่
          </Button>
        </div>
      </div>

   {/* <div>
   <DataTable
            columns={columns}
            data={dataTest}
        />
   </div> */}

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
              {currentItems.map((item, index) => {
                const isLast = index === data.length - 1;
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
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.code}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.f_name}  {item.l_nane}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        0850032649
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.username}
                      </Typography>
                    </td>
             
                  
                    <td className={classes}>
                      <div className="flex  gap-2 ">
                        <HiPencilAlt
                          size={24}
                          color="white"
                          className="cursor-pointer bg-purple-500 rounded-full w-8 h-8 p-1.5 "
                          onClick={()=>handleDataToModal(item)}
                        />
                        <HiTrash
                          size={24}
                          color="white"
                          className="cursor-pointer bg-red-500 rounded-full w-8 h-8 p-1.5 "
                          onClick={() => handleDelete(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
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
