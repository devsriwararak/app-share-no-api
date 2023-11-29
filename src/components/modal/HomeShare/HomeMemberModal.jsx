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
import { HiOutlineHome ,HiOutlineUserAdd } from "react-icons/hi";
import Select from "react-select";

const options = [
  { value: "", label: "เลือกธนาคารที่ต้องการ" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const HomeMemberModal = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} size="sm" handler={handleOpen}>
      <DialogHeader className="bg-gray-200 flex gap-2 rounded-lg">
        {" "}

        
        <HiOutlineUserAdd  /> สร้างพักงานบ้านแชร์
      </DialogHeader>
      <DialogBody className=" py-5 h-96 overflow-y-scroll md:h-full md:overflow-auto   ">

        <div className="flex flex-col md:flex-row gap-2 justify-center">
          <Select
            options={options}
            className="w-full"
            placeholder="เลือกบ้านแชร์"
          />
        </div>

        <div className="grid grid-flow-row md:grid-cols-2 gap-2 mx-auto mt-3  ">
          <Input color="red" label="Username" error required />
          <Input color="red" label="password" error required />
        </div>

        <div className="flex flex-col md:flex-row gap-2  justify-center mt-3">
          <Input color="purple" label="ชื่อ" className="w-full" />
          <Input color="purple" label="สกุล" className="w-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-2  justify-center mt-3">
          <Input color="purple" label="เบอร์โทร" className="w-full" />
          <Input color="purple" label="LINE ID (ถ้ามี)" className="w-full" />
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
        <Button variant="gradient" color="green" className="text-sm" size="sm" onClick={handleOpen}>
          <span>บันทึก</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default HomeMemberModal;



