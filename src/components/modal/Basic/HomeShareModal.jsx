import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { HiOutlineHome } from "react-icons/hi";


const HomeShareModal = ({ open, handleOpen , id }) => {
  return (
    <Dialog open={open} size="sm" handler={handleOpen} >
      <DialogHeader className="bg-gray-200 flex gap-2 rounded-lg">
        {" "}
        <HiOutlineHome /> {id ? "แก้ไขบ้านแชร์" : "สร้างบ้านแชร์"}
      </DialogHeader>
      <DialogBody className=" py-10 h-96 overflow-scroll md:h-full md:overflow-auto  ">
          ID : {id ? id : ''}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* <Input color="purple" disabled label="รหัสบ้านแชร์ H00001" required /> */}
          <Input color="purple" label="ชื่อบ้านแชร์ " required />
        </div>

      </DialogBody>
      <DialogFooter className="bg-gray-100 rounded-lg">
        <Button
          variant="gradient"
          color="red"
          onClick={handleOpen}
          className="mr-1 text-sm"
          size="sm"
        >
          <span>ยกเลิก</span>
        </Button>
        <Button variant="gradient" color="purple" size="sm" className="text-sm" onClick={handleOpen}>
          <span>บันทึก</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default HomeShareModal;
