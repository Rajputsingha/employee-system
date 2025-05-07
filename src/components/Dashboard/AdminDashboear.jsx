import React from "react";
import Header from "../Employee/Header";
import CreateTask from "../Employee/createTask";
import AllTask from "../Employee/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};
export default AdminDashboard;
