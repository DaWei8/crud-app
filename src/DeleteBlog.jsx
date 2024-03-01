import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

export default function DeleteBlog() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDeleteBlog = async (id) => {
    try {
      const response = await axios
        .get(`http://localhost:3001/deleteblog/${location.state.id}`)
        .then((response) => {
          console.log(response);
          navigate("/blogs");
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   console.log(location.state.id);
  //   console.log(
  //     "Title:",
  //     location.state.title,
  //     "\nContent: ",
  //     location.state.content
  //   );
  //   // console.log(location.state.content);
  // });

  return (
    <div className="flex flex-row justify-center  items-center h-[85vh] rounded-[10px] mt-[10px] bg-[#f2f5f7] ">
      <div className="bg-white p-[20px] rounded w-[50%]  min-w-[300px] ">
        <h3 className=" text-[28px] font-semibold mb-[10px] ">
          Do you want to <span className=" text-[#d13866] ">Delete</span> this
          Note?
        </h3>
        <div className=" flex flex-col gap-[20px] rounded-[5px] mb-[20px] px-[10px] pt-[10px] pb-[20px] ">
          <div className=" flex flex-col gap-[10px]  ">
            <div className=" gap-[5px] flex flex-col bg-[#f5f7f8] p-[10px] rounded-[10px] ">
              <h2 className="text-[12px] text-[#bcc6d1] ">Title</h2>
              <p className=" text-[20px] font-semibold  ">
                {location.state.title}
              </p>
            </div>
            {/* <hr className="border-[#cbced4]" /> */}
            <div className=" gap-[5px] flex flex-col px-[10px] ">
              <h2 className=" text-[12px] text-[#bcc6d1] ">Content</h2>
              <p className=" text-[16px] font-[400] text-wrap text-clip truncate ">
                {location.state.content}
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-auto px-[10px] flex justify-between items-center ">
          <button
            onClick={() => navigate("/blogs")}
            className=" bg-[#f5f7f8]  px-[30px] w-fit h-[40px] flex items-center rounded-md  "
          >
            No, Go back
          </button>
          <button
            onClick={handleDeleteBlog}
            className=" px-[30px] bg-[#d13866] text-[#fff] w-fit h-[40px] flex items-center rounded-md "
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
