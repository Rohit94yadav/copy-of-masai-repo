import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

export const Dashboard = () => {
  return (
    <div>
      <button data-testid="sorting-btn">Top 10 Employees</button>

      <div data-testid="employee-data">
        { <EmployeeName /> }
        { <EmployeeSalary /> }
      </div>
    </div>
  );
};
