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
import { HiOutlineUserGroup } from "react-icons/hi";
import { toast } from "react-toastify";

const AddMember = ({ handleOpen, open }) => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        toast.success('บันทึกสำเร็จ')
    }

  return (
    <Dialog open={open} size="md" handler={handleOpen}>
      <DialogHeader className="bg-gray-200 rounded-lg flex gap-4">
        <HiOutlineUserGroup size={24} color="black" /> สร้างพนักงานใหม่
      </DialogHeader>
      <DialogBody>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <Input label="ชื่อ" color="purple" />
            <Input label="สกุล" color="purple" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="bg-yellow-100  w-full rounded-lg">
              <Input label="Username" color="red" />
            </div>
            <div className="bg-yellow-100  w-full rounded-lg">
              <Input label="password" type="password" color="red" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Input label="เบอร์โทรศัพท์" color="purple" />
            <Input label="LINE ID (ถ้ามี)" color="purple" />
          </div>

          <div className="mt-4">
            <Textarea label="ที่อยู่" />
          </div>

          <div className="flex justify-end mt-2">
            <Button
              variant="filled"
              color="red"
              onClick={handleOpen}
              className="mr-1  text-sm"
              size="sm"
            >
              <span>ยกเลิก</span>
            </Button>
            <Button variant="filled" type="submit" size="sm" color="purple" onClick={handleOpen} className=" text-sm">
              <span>บันทึก</span>
            </Button>
          </div>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default AddMember;
