import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import classNames from "classnames";
import React, { useState } from "react";
import { HiOutlineHeart, HiOutlineUserAdd } from "react-icons/hi";
import Select from "react-select";
import { toast } from "react-toastify";

const TABLE_HEAD = ["ลำดับ", "บ้านแร์", "วงค์แชร์", "สถานะ"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
    status: "รอดำเนินการ",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
    status: "รอดำเนินการ",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
    status: "ปฏิเสธ",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
    status: "เข้าร่วม",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
    status: "เข้าร่วม",
  },
];

const AddToWongShare = () => {
  const [btnDisable, setBtnDisable] = useState(true);
  const [data, setData] = useState({});

  const options = [
    { value: "", label: "ไม่เลือก" },
    { value: "บ้านแชร์-001", label: "บ้านแชร์-001" },
    { value: "บ้านแชร์-002", label: "บ้านแชร์-002" },
  ];

  const options2 = [
    { value: "วงค์-001", label: "วงค์-001" },
    { value: "วงค์-002", label: "วงค์-002" },
    { value: "วงค์-003", label: "วงค์-003" },
    { value: "วงค์-004", label: "วงค์-004" },
  ];

  const handleChange_1 = (e) => {
    const text = e.value;
    if (text === "") {
      setBtnDisable(true);
      setData({});
    } else {
      setBtnDisable(false);
      setData((prev) => ({
        ...prev,
        home: text,
      }));
    }
  };

  const handleChange_2 = (e) => {
    const text = e.value;
    setData((prev) => ({
      ...prev,
      wong: text,
    }));
  };

  const handleAddWong = () => {
    toast.success("บันทึกสำเร็จ ");
  };

  return (
    <div>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-4 ">
        <div>
          <Card className="m-4 ring-1 ring-gray-300 shadow-lg">
            <CardBody>
              <h2 className="text-lg font-bold text-black flex items-center gap-2">
                <HiOutlineUserAdd />
                ขอเข้าวงค์แชร์
              </h2>
              <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-8">
                <Select
                  options={options}
                  placeholder="เลือกบ้านแชร์"
                  onChange={(e) => handleChange_1(e)}
                />
                <Select
                  isDisabled={btnDisable}
                  options={options2}
                  placeholder="เลือกวงค์แชร์"
                  onChange={(e) => handleChange_2(e)}
                />
              </div>

              <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                  <b>ชื่อบ้านแชร์ : </b> <span> {data.home} </span>
                </div>
                <div>
                  <b>ชื่อวงค์แชร์ : </b> <span> {data.wong} </span>
                </div>
              </div>

              <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <b>รูปแบบวงค์แชร์ : </b> <span>{data.home}</span>
                </div>
                <div>
                  <b>จำนวนเงินต้น : </b> <span>{data.wong}</span>
                </div>
              </div>

              <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <b>ค่าดูแลวงค์ : </b> <span>{data.home}</span>
                </div>
                <div>
                  <b>จำนวนมือ : </b> <span>{data.wong}</span>
                </div>
              </div>

              <div className="mt-4">
                <b>หมายเหตุ : </b> <span>{data.home}</span>
              </div>

              <div className="flex justify-end mt-5">
                <Button
                  color="purple"
                  variant="filled"
                  onClick={handleAddWong}
                  disabled={!data.wong}
                  size="sm"
                  className=" text-sm"
                >
                  เข้าร่วม
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="m-4  ring-1 ring-gray-300 shadow-lg">
            <CardBody>
              <div className="flex justify-between ">
                <h2 className="text-lg font-bold text-black flex items-center gap-2 w-full ">
                  <HiOutlineHeart />
                  วงค์แชร์ของฉัน
                </h2>
                <Input
                  label="ค้นหารหัส หรือ วงค์แชร์"
                  color="purple"
                  className="w-full "
                />
              </div>

              <Card>
                <CardBody>
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
                      {TABLE_ROWS.map(({ name, job, date, status }, index) => (
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
                          <td className="p-4">
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
                                "font-bold p-1 rounded-lg"
                              )}
                            >
                              {status}
                            </Typography>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
              
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddToWongShare;
