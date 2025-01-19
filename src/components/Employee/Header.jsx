import React from "react";

const Header = () => {
  return (
    <div className=" flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        {" "}
        Abhijeet <br />
        <span className="text-3xl  font-semibold">Singh </span>
      </h1>
      <button className="bg-red-500  text-lg font-medium fonttext-white  px-5 py-2  rounded-smalling">
        Log Out
      </button>
    </div>
  );
};
export default Header;
