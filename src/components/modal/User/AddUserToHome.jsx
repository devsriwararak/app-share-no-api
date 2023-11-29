import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import { FcEditImage, FcEmptyTrash, FcPlus } from "react-icons/fc";

import {
  HiOutlineHome,
  HiOutlinePencilAlt,
  HiOutlineUserAdd,
  HiOutlineUsers,
  HiTrash,
} from "react-icons/hi";
import Select from "react-select";
import { toast } from "react-toastify";
import classNames from "classnames";

const TABLE_HEAD = ["ลำดับ", "รหัส", "ชื่อลูกแชร์", "เลือก", "แก้ไข/ลบ"];

const TABLE_ROWS = [
  {
    name: "1",
    job: "Manager",
    date: "23/04/18",
    status: "รอดำเนินการ",
  },
  {
    name: "2",
    job: "Developer",
    date: "23/04/18",
    status: "รอดำเนินการ",
  },
  {
    name: "3",
    job: "Executive",
    date: "19/09/17",
    status: "ปฏิเสธ",
  },
  {
    name: "4",
    job: "Developer",
    date: "24/12/08",
    status: "เข้าร่วม",
  },
  {
    name: "5",
    job: "Manager",
    date: "04/10/21",
    status: "เข้าร่วม",
  },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddUserToHome = ({ handleOpen, open }) => {
  const [data, setData] = useState({});

  const handleSelectUser = (name) => {
    setData((prev) => ({
      ...prev,
      name: name,
    }));
  };

  const handleAddUser = () => {
    toast.success("บันทึกสำเร็จ");
  };
  return (
    <div>
      <Dialog open={open} size="xl" handler={handleOpen}>
        <DialogHeader className="bg-gray-200 rounded-lg flex gap-2">
          {" "}
          <HiOutlineUsers />
          จัดการลูกแชร์
        </DialogHeader>
        <DialogBody className="overflow-y-scroll h-[500px] md:h-full">
          <div className="flex flex-col md:flex-row gap-4">
            <Card className="w-full ring-2 ring-gray-300/20">
              <CardBody>
                <div className="flex flex-col md:flex-row justify-between">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <HiOutlineUserAdd size={24} />
                    เพิ่มลูกแชร์เข้าบ้านตัวเอง
                  </h2>
                  <div>
                    <Input label="ค้นหา รหัส หรือ ชื่อลูกแชร์" />
                  </div>
                </div>

                <Card className=" w-full overflow-y-scroll h-80 mt-5">
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
                        <tr key={name} className="even:bg-blue-gray-50/50 hover:bg-gray-200">
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
                              {date}
                            </Typography>
                          </td>
                          <td className="p-4 flex justify-center">
                            <FcPlus
                              className="cursor-pointer"
                              onClick={() => handleSelectUser(job)}
                              size={30}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>

                <div className="flex flex-col md:flex-row gap-4 mt-5 items-center">
                  <div className="w-full">
                    <b className="font-bold">ชื่อลูกแชร์ : </b>{" "}
                    <span>{data.name}</span>
                  </div>
                  <Select
                    className="w-full"
                    options={options}
                    placeholder="เลือกวงค์แชร์ที่ต้องการ"
                  />
                </div>
                <div className="flex justify-end mt-5">
                  <Button
                    color="purple"
                    size="md"
                    className="text-sm"
                    onClick={handleAddUser}
                  >
                    บันทึก
                  </Button>
                </div>
              </CardBody>
            </Card>

            <Card className="w-full ring-2 ring-gray-300/20 ">
              <CardBody>
                <h2 className="text-lg font-bold flex items-center gap-2">
                  {" "}
                  <HiOutlineHome size={24} />
                  ลูกแชร์ทั้งหมดในบ้านเรา + คนที่มาขอเข้าร่วม **
                </h2>

                <Select
                  className="w-full mt-5"
                  options={options}
                  placeholder="เลือกวงค์แชร์ที่ต้องการ"
                />

                <Card>
                  <CardBody className=" overflow-y-scroll h-72 ">
                    <table className="w-full min-w-max table-auto text-center mt1">
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
                        {TABLE_ROWS.map(
                          ({ name, job, date, status }, index) => (
                            <tr key={name} className="even:bg-blue-gray-50/50 hover:bg-gray-200">
                              <td className="p-2">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {name}
                                </Typography>
                              </td>
                              <td className="p-2">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {job}
                                </Typography>
                              </td>
                              <td className="p-2">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {date}
                                </Typography>
                              </td>
                              <td className="p-2">
                                <Typography
                                  variant="small"
                                  color={
                                    status === "รอดำเนินการ"
                                      ? "orange"
                                      : status === "ปฏิเสธ"
                                      ? "red"
                                      : status === "เข้าร่วม"
                                      ? "green"
                                      : ""
                                  }
                                  // className="font-bold"
                                  className={classNames(
                                    status === "รอดำเนินการ"
                                      ? "bg-orange-100"
                                      : status === "ปฏิเสธ"
                                      ? "bg-red-100"
                                      : status === "เข้าร่วม"
                                      ? "bg-green-100"
                                      : "",
                                    "font-bold p-1"
                                  )}
                                >
                                  {status}
                                </Typography>
                              </td>
                              <td className="p-2 ">
                                <div className="flex cursor-pointer gap-2">
                                  <HiOutlinePencilAlt className="bg-purple-500 p-1 rounded-full" color="white" size={30} />
                                  <HiTrash  className="bg-red-500 p-1 rounded-full" color="white" size={30} />
                                </div>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </CardBody>
                </Card>

                <div className="flex flex-col md:flex-row gap-4 mt-5 items-center">
                  <div className="w-full">
                    <b className="font-bold">ชื่อลูกแชร์ : </b>{" "}
                    <span>{data.name}</span>
                  </div>
                  <Select
                    className="w-full"
                    options={options}
                    placeholder="เลือกสถานะใหม่"
                  />
                </div>
                <div className="flex justify-end mt-5">
                  <Button
                    color="purple"
                    size="md"
                    className="text-sm"
                    onClick={handleAddUser}
                  >
                    อัพเดท
                  </Button>
                </div>


              </CardBody>
            </Card>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default AddUserToHome;
