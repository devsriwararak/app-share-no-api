import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  IconButton,
} from "@material-tailwind/react";
import Select from "react-select";
import HomeAdminModal from "../../../components/modal/HomeShare/HomeAdminModal";
import HomeMemberModal from "../../../components/modal/HomeShare/HomeMemberModal";
import { HiDatabase, HiPencilAlt, HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const HomeShare = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const TABLE_HEAD = ["ลำดับ", "รหัส", "ชื่อ", "username", "แก้ไข/ลบ"];

  const TABLE_ROWS = [
    {
      name: "1",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "2",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "3",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "4",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "5",
      job: "Manager",
      date: "04/10/21",
    },
  ];

  // Footer Table 1
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TABLE_ROWS.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(TABLE_ROWS.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Modal
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen1 = () => setOpen1(!open1);
  const handleOpen2 = () => setOpen2(!open2);

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
    <>
      <HomeAdminModal handleOpen={handleOpen1} open={open1} />
      <HomeMemberModal handleOpen={handleOpen2} open={open2} />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      
        <Typography variant="h5" color="blue-gray" className="mb-2 flex gap-2 items-center
        ">
        <HiDatabase/>  ข้อมูลบ้านแชร์และพนักงาน (ทั้งหมด)
        </Typography>
        <div className="w-full md:w-4/12">
          <Select options={options} placeholder="เลือกบ้านแชร์" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 ">
        <div className="w-full">
          <Card className="mt-6 shadow-lg border border-gray-200 ">
            <CardBody>
              <div className="flex flex-col md:flex-row md:justify-between gap-2 items-center">
                <div className="  ">
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-2  font-bold"
                  >
                    ข้อมูลเจ้าของบ้านแชร์
                  </Typography>
                </div>
                <div className="   ">
                  <Input label="ค้นหาเจ้าของบ้านแชร์" />
                </div>
                <div className="   flex justify-end">
                  <Button
                    onClick={handleOpen1}
                    className="text-sm"
                    size="sm"
                    color="purple"
                  >
                    เพิ่มเจ้าของบ้าน
                  </Button>
                </div>
              </div>

              <Card className="h-full w-full mt-6 overflow-scroll ">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
                    {TABLE_ROWS.map(({ name, job, date }, index) => (
                      <tr key={index} className="even:bg-blue-gray-50/50 hover:bg-gray-200">
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {job}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className="p-4">
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
                    ))}
                  </tbody>
                </table>
              </Card>
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
        <div className="w-full">
          <Card className="mt-6 shadow-lg border border-gray-200  ">
            <CardBody>
              <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-2  font-bold"
                >
                  ข้อมูลพนักงานบ้านแชร์
                </Typography>
                <div className="flex-1">
                  <Input label="ค้นหาเจ้าของบ้านแชร์" />
                </div>
                <div className="">
                  <Button
                    onClick={handleOpen2}
                    className="text-sm"
                    size="sm"
                    color="purple"
                  >
                    เพิ่มพนักงาน
                  </Button>
                </div>
              </div>

              <Card className="h-full w-full mt-6 overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
                    {TABLE_ROWS.map(({ name, job, date }, index) => (
                      <tr key={index} className="even:bg-blue-gray-50/50 hover:bg-gray-200">
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {job}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className="p-4">
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
                    ))}
                  </tbody>
                </table>
              </Card>
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
      </div>
    </>
  );
};

export default HomeShare;
