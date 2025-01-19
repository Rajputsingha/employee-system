import React from "react";
import Header from "../Employee/Header";
import TaskListNumber from "../Employee/TaskListNumber";
import Task from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header />
        <TaskListNumber />
        <Task />
      </div>
    </>
  );
};

export default EmployeeDashboard;
