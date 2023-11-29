import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { HiOutlineHome } from "react-icons/hi";
import Select from "react-select";
import {BankList} from "../../data/BankList";

const options = [
  { value: "", label: "เลือกธนาคารที่ต้องการ" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const HomeAdminModal = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} size="sm" handler={handleOpen}>
      <DialogHeader className="bg-gray-200 flex gap-2 rounded-lg">
        {" "}
        <HiOutlineHome /> สร้างเจ้าของบ้านแชร์
      </DialogHeader>
      <DialogBody className=" py-5 h-96 overflow-y-scroll md:h-full md:overflow-auto   ">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Select
            options={options}
            className="w-full"
            placeholder="เลือกบ้านแชร์"
          />
        </div>

        <div className="grid grid-flow-row md:grid-cols-2 gap-4   mt-3  ">
          <Input
            color="red"
            label="Username"
            error
            required
            className="w-full"
          />
          <Input
            color="red"
            label="password"
            error
            required
            className="w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4  justify-center mt-3">
          <Input color="purple" label="ชื่อ" className="w-full" />
          <Input color="purple" label="สกุล" className="w-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-3">
          <Select
            options={BankList}
            className="w-full"
            placeholder="เลือกธนาคาร"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4  justify-center mt-3">
          <Input color="purple" label="หมายเลขบัญชี" className="w-full" />
          <Input color="purple" label="ชื่อบัญชี" className="w-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-3">
        <Input color="purple" label="เบอร์โทร" />
        <Input color="purple" label="Line ID (ถ้ามี)" />
        </div>

        <div className="flex flex-col md:flex-row gap-2  justify-center mt-3">
          <Textarea color="purple" label="ที่อยู่" className="w-full" />
        </div>

      </DialogBody>
      <DialogFooter>
        <Button
          variant="gradient"
          color="red"
          onClick={handleOpen}
          className="mr-1 text-sm"
          size="sm"
        >
          <span>ยกเลิก</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handleOpen}
          size="sm"
          className="text-sm"
        >
          <span>บันทึก</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default HomeAdminModal;
