"use client";
import React from "react";
import DashBoardLayout from "../layout";
import StaffDashboard from "@/components/staffdashboard";
const Staff = () => {
  return (
    <DashBoardLayout role="staff">
      <StaffDashboard />
    </DashBoardLayout>
  );
};

export default Staff;
