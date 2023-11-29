import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { HiOutlineCalendar, HiOutlineHome, HiOutlinePencilAlt, HiOutlinePlus, HiOutlinePlusSm, HiOutlineUsers } from "react-icons/hi";
import { FcPlus } from "react-icons/fc";
import DataUser from "./DataUser";
import DataActivity from "./DataActivity";
import AddUserToHome from "../../../components/modal/User/AddUserToHome";

const TABLE_HEAD = ["ลำดับ", "รหัส", "ชื่อ", "เลือก"];

const TABLE_ROWS = [
  {
    name: "1",
    job: "U00001",
    date: "User-01",
  },
  {
    name: "2",
    job: "U00002",
    date: "User-02",
  },
  {
    name: "3",
    job: "U00003",
    date: "User-03",
  },
];

const ManageUser = () => {
  const [statusBtn , setStatusBtn] = useState(1)
  const [data, setData] = useState({})

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleBtnPage = (number)=>{
    setStatusBtn(number)
  }

  const handelClick = (code, name)=>{
    setData((prev)=>({
      ...prev,
      name: name,
      code:code
    }))
  }

  return (
    <div>
      <AddUserToHome handleOpen={handleOpen} open={open}  />

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="ring-2 ring-gray-800/5 w-full md:w-4/12">
          <CardBody>
            <div className="flex flex-col md:flex-row   md:justify-between">
              <h2 className="text-lg text-black font-bold flex items-center gap-3">
                <HiOutlineUsers />
                ลูกแชร์ (3)
              </h2>
              <Button className="text-[14px] flex items-center gap-2  text-sm" color="purple" size="sm" variant="filled" onClick={handleOpen}>
                <HiOutlinePlusSm size={20}   />เพิ่มลูกแชร์ใหม่
              </Button>
            </div>
            <div className="mt-3">
              <Input className="" label="ค้นหา รหัส หรือ ชื่อลูกค้า" color="purple" />
            </div>

            <Card className=" w-full overflow-y-scroll mt-5">
              <table className="w-full min-w-max table-auto text-center">
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
                      <td className="p-4 flex justify-center cursor-pointer">
                        <FcPlus onClick={()=>handelClick(job, date )} size={25} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </CardBody>
        </Card>

        <div className="w-full md:w-8/12 ">
          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <Button color="blue" size="sm" className=" text-sm flex items-center gap-2 " onClick={()=>handleBtnPage(1)}><HiOutlineHome size={20} /> ข้อมูลลูกแชร์</Button>
            <Button color="green" size="sm" className=" text-sm flex items-center gap-2" onClick={()=>handleBtnPage(2)}> <HiOutlineCalendar size={20}/> ข้อมูลกิจกรรม</Button>

          </div>
          <Card className="ring-2  ring-gray-800/5 mt-6 ">
            <CardBody>
              <div>
                {statusBtn === 1 && <DataUser data={data}/>}
                {statusBtn === 2 && <DataActivity/>}

              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
