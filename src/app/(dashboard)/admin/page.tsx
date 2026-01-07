import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* left */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        {/* USER card */}
        <div className="flex gap-4 justify-between flex-wrap lg:flex-nowrap">
            <UserCard type="student"/>
            <UserCard type="teacher"/>
            <UserCard type="parent"/>
            <UserCard type="staff"/>
        </div>
        {/* Middle Charts */}
        <div className="flex gap-4 flex-col md:flex-row">
            {/* CountCahrts */}
            <div className="w-full md:w-1/3 h-[450px] ">
                <CountChart/>
            </div>
            {/* Attendance chart */}
            <div className="w-full md:w-2/3 h-[450px]">
                <AttendanceChart/>
            </div>
        </div>
        {/* Bottom Charts */}
        <div className=""></div>
      </div>
      {/* right */}
      <div className="w-full md:1/3">r</div>
    </div>
  );
};

export default AdminPage;
