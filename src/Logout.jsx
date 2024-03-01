import React from "react";
import { useAuth } from "./auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  return (
    <div className="flex flex-row justify-center  items-center h-[85vh] rounded-[10px] mt-[10px] bg-[#f2f5f7] ">
      <div className="bg-white p-[20px] justify-between flex flex-col rounded  h-[200px] w-[50%] items-center min-w-[300px] ">
        <h3 className=" text-[28px] font-semibold mb-[10px] ">
          Do you want to <span className=" text-[#d13866] ">Log out</span>
        </h3>

        <div className=" mt-auto px-[10px] max-w-[400px] w-[100%] flex justify-between items-center ">
          <button
            onClick={() => navigate("../")}
            className=" bg-[#f5f7f8]  px-[30px] w-fit h-[40px] flex items-center rounded-md  "
          >
            No, Go back
          </button>
          <button
            onClick={() => {
              navigate("/");
              setIsAuthenticated(false);
            }}
            className=" px-[30px] bg-[#d13866] text-[#fff] w-fit h-[40px] flex items-center rounded-md "
          >
            Yes, Log out
          </button>
        </div>
      </div>
    </div>
  );
}
