import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { HiOutlineUserAdd, HiOutlineX } from "react-icons/hi";
import MyWongHome from "./MyWongHome";
import MyWongWong from "./MyWongWong";
import MyWongActivity from "./MyWongActivity";
import { FcPlus } from "react-icons/fc";


const TABLE_HEAD = ["ลำดับ", "บ้านแชร์", "เลือก"];

const TABLE_ROWS = [
  {
    name: "1",
    job: "บ้านแชร์-001",
  },
  {
    name: "2",
    job: "บ้านแชร์-002",
  },
  {
    name: "3",
    job: "ไม่เลือก",
  },
];

const TABLE_ROWS_2 = [
  {
    name: "1",
    job: "วงค์ทดสอบ-001",
  },
  {
    name: "2",
    job: "วงค์ทดสอบ-002",
  },
  {
    name: "3",
    job: "ไม่เลือก",
  },
];

const MyWong = () => {
  const [data, setData] = useState({});
  const [showComponent, setShowComponent] = useState(1);

  const handleClick_1 = (index) => {
    setData((prev) => ({
      ...prev,
      home: index == 2 ? "" : TABLE_ROWS[index].job,
    }));
  };

  const handleClick_2 = (index) => {
    setData((prev) => ({
      ...prev,
      wong: index == 2 ? "" : TABLE_ROWS_2[index].job,
    }));
  };

  const HandleSelectBtn = (number) => {
    setShowComponent(number);
    setData((prev) => ({
      ...prev,
      home: "",
    }));
  };

  return (
    <div>
      <div className="flex flex-col  md:flex-row gap-4">
        <div className="w-full md:w-3/12 ">
          <Card className="ring-1 ring-gray-200 ">
            <CardBody>
              <h2 className="text-lg font-bold text-black flex items-center gap-2">
                <HiOutlineUserAdd />
                บ้านแชร์ (2)
              </h2>
              <div className="mt-2">
                <Input label="ค้นหารหัส หรือ ชื่อบ้านแชร์" />
              </div>
              <Card className="w-full ">
                <table className=" w-full mt-2 table-auto text-left ">
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

                        <td className="p-4 flex justify-center cursor-pointer">
                          <FcPlus onClick={() => handleClick_1(index)} size={23} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <hr className="mt-5 border-gray-300 " />

              <div
                className={
                  data.home && showComponent === 2 ? "block w-full" : "hidden"
                }
              >
                <div className="flex justify-between items-center mt-5">
                  <h2 className="text-lg font-bold text-black flex items-center gap-2 ">
                    <HiOutlineUserAdd />
                    วงค์แชร์ (4)
                  </h2>
                  <HiOutlineX
                    className="bg-red-500 rounded-full px-1 cursor-pointer hover:bg-black "
                    color="white"
                    size={25}
                    onClick={() =>
                      setData((prev) => ({
                        ...prev,
                        home: "",
                      }))
                    }
                  />
                </div>
                <div className="mt-2">
                  <Input label="ค้นหารหัส หรือ ชื่อวงค์แชร์" />
                </div>
                <Card>
                  <table className=" w-full mt-2 table-auto text-center ">
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
                      {TABLE_ROWS_2.map(({ name, job, date }, index) => (
                        <tr key={name} className="even:bg-blue-gray-50/50">
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

                    
                          <td className="p-4 flex justify-center cursor-pointer">
                          <FcPlus onClick={() => handleClick_2(index)} size={25} />
                        </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-full md:w-9/12 ">
          <Card className="ring-1 ring-gray-200">
            <CardBody>
              <div className="flex flex-col md:flex-row gap-4">
                <Button color="green" onClick={() => HandleSelectBtn(1)} size="sm" className=" text-sm">
                  ข้อมูลบ้านแชร์
                </Button>
                <Button color="blue" onClick={() => HandleSelectBtn(2)} size="sm" className=" text-sm">
                  ข้อมูลวงค์แชร์
                </Button>
                <Button color="orange" onClick={() => HandleSelectBtn(3)} size="sm" className=" text-sm">
                  ข้อมูลกิจกรรม
                </Button>
              </div>

              <div className="mt-8">
                {showComponent === 1 && <MyWongHome data={data} />}
                {showComponent === 2 && <MyWongWong data={data} />}
                {showComponent === 3 && <MyWongActivity data={data} />}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyWong;
