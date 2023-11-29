import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import {
  HiOutlineHome,
  HiOutlineChatAlt2,
  HiOutlinePlusCircle,
} from "react-icons/hi";
import Select from "react-select";
import { options2 } from "../../data/TypePlay";
import { toast } from "react-toastify";

const WongShareModal = ({ open, handleOpen, id }) => {
  const [typePlayCheck, setTypePlayCheck] = useState(1);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('บันทึกสำเร็จ ')
    handleOpen()
  };

  return (
    <Dialog open={open} size="lg" handler={handleOpen}>
      <DialogHeader className="bg-gray-200 flex gap-2 rounded-lg">
        <HiOutlineChatAlt2 /> {id ? "แก้ไขวงค์แชร์" : "สร้างวงค์แชร์"}
      </DialogHeader>
      <DialogBody className=" py-10 h-96 overflow-scroll md:h-full md:overflow-auto ">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Select
              options={options}
              className="w-full"
              placeholder="เลือกบ้านแชร์"
            />
            <Input color="purple" label="ชื่อวงค์แชร์" required />
            <Select
              options={options2}
              className="w-full"
              placeholder="รูปแบบวงค์แชร์"
              onChange={(e) => setTypePlayCheck(e.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">
            <Input
              color="purple"
              label="ส่งต่องวด"
              required
              disabled={typePlayCheck == 3}
            />
            <Input color="purple" label="จำนวนเงินต้น" />
            <Input color="purple" label="จำนวนมือ" required />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">
            <Input color="purple" label="ค่าดูแลวง " />
            <Input
              color="purple"
              label="ดอกเบี้ย"
              disabled={
                typePlayCheck == 1 ||
                typePlayCheck == 3 ||
                typePlayCheck == 4 ||
                typePlayCheck == 5
              }
            />
          </div>

          <div className="w-full mt-5">
            <Input color="purple" label="หมายเหตุ" />
          </div>

          <div className="flex justify-end mt-5">
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
              type="submit"
              variant="gradient"
              color="purple"
              className="text-sm "
              size="sm"
            >
              <span>บันทึก</span>
            </Button>
          </div>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default WongShareModal;
