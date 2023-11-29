import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import {
  HiOutlineDesktopComputer
} from "react-icons/hi";

const ViewWongShare = ({ open, handleOpen, id }) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const options2 = [
    { value: "บิดดอกตาม", label: "บิดดอกตาม" },
    { value: "ดอกตาม", label: "ดอกตาม" },
    { value: "ขั้นบันได", label: "ขั้นบันได" },
    { value: "บิดลดต้น (ลดต้นงวดถัดไป)", label: "บิดลดต้น (ลดต้นงวดถัดไป)" },
    { value: "บิดลดต้น (ลดต้นงวดที่บิด)", label: "บิดลดต้น (ลดต้นงวดที่บิด)" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} size="lg" handler={handleOpen}>
      <DialogHeader className="bg-gray-200 flex gap-2 rounded-lg">
        <HiOutlineDesktopComputer /> ข้อมูลวงแชร์ที่ : {id}
      </DialogHeader>
      <DialogBody className=" py-10 h-96 overflow-scroll md:h-full md:overflow-auto ">
        55555555555555555555
      </DialogBody>
    </Dialog>
  );
};

export default ViewWongShare;
