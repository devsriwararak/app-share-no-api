import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";
import { HiOutlineHome, HiOutlinePencilAlt } from "react-icons/hi";

const DataUser = ({ data }) => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-lg text-black font-bold flex items-center gap-3">
          <HiOutlineHome /> ข้อมูลลูกแชร์
        </h2>

      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <div className="w-full">
          <b>รหัส : </b> <span> {data.code} </span>
        </div>
        <div className="w-full">
          <b>ชื่อ : </b> <span> {data.name} </span>
        </div>
        <div className="w-full">
          <b>สกุล : </b> <span>xxxx</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-1/3">
          <b>เบอร์โทร : </b> <span>xxxx</span>

        </div>
        <div className="w-2/3">
        <b>ที่อยู่ : </b> <span>xxxx</span>

        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-16">
        <Card className="w-full ring-2 ring-gray-800/5 mt-8 md:mt-0">
          <CardHeader className="h-14 bg-purple-800 text-white flex justify-center items-center text-lg font-bold ring-1 ring-gray-300">
            วงแชร์ทั้งหมดที่เล่น
          </CardHeader>
          <CardBody>ดำเนินการทำใน งวดที่3/3 ครับ</CardBody>
        </Card>

        <Card className="w-full ring-2 ring-gray-800/5 mt-8 md:mt-0">
          <CardHeader className="h-14 bg-purple-800 text-white flex justify-center items-center text-lg font-bold ring-1 ring-gray-300">
            สรุปยอดมือเป็นมือตาย
          </CardHeader>
          <CardBody>ดำเนินการทำใน งวดที่3/3 ครับ</CardBody>
        </Card>
      </div>
    </>
  );
};

export default DataUser;
