import React from "react";
import { Link } from "react-router-dom";
import DashboardStartGrid from "./DashboardStartGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";

const Dashboard = () => {


  return (
    <>


      <div className="  ">
        <div className="flex gap-4 w-full">
          <DashboardStartGrid />
        </div>

        <div className=" flex flex-col md:flex-row lg:flex-row gap-2 w-full ">
          <TransactionChart />
          <BuyerProfileChart />
        </div>

       <div className="text-black mt-10">
       <h2 className="text-3xl">กำลังปรับปรุง ! Function นี้ (ใช้งานได้ในงวดที่ 3/3) </h2> 
       </div>

       
      </div>
    </>
  );
};

export default Dashboard;
