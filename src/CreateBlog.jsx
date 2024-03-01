import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

export default function CreateBlog() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();
 

  const handleCreateBlog = (e) => {
    e.preventDefault();
    if (title !== "" && content !== "") {
      axios
        .post("http://localhost:3001/createblog", {
          title,
          content,
        })
        .then((response) => {
          console.log(response);
          navigate("/blogs");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="flex flex-row justify-center rounded-[10px] mt-[10px] bg-[#f2f5f7] items-center  h-[85vh] ">
      <div className="bg-white p-[20px] rounded w-[50%]  min-w-[300px] ">
        <h3 className=" text-[28px] mb-[10px] font-semibold ">New Note</h3>
        <form
          onSubmit={handleCreateBlog}
          className=" flex flex-col gap-[20px] "
          method="get"
        >
          <div className=" flex flex-col gap-[10px] ">
            <div className=" gap-[5px] flex flex-col ">
              <label
                htmlFor="blogtitle"
                className=" text-[16px] font-semibold "
              >
                Title
              </label>
              <input
                type="text"
                className=" pl-[8px] h-[40px] border-[#e4e4e4]  border-solid border-[1px] rounded  "
                id="blogtitle"
                // defaultValue={location.state.title}
                aria-describedby="blogcontent"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className=" gap-[5px] flex flex-col ">
              <label
                htmlFor="blogcontent"
                className="text-[16px] font-semibold"
              >
                Content
              </label>
              <textarea
                className=" pl-[8px] border-[#e4e4e4]  border-solid border-[1px] rounded  "
                id="blogcontent"
                rows="3"
                // defaultValue={location.state.content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className=" flex flex-row justify-between ">
            <button
              type="submit"
              onClick={handleCreateBlog}
              className="text-[#fff] px-[30px] w-fit h-[40px] flex items-center rounded-md bg-[#1e9daf] "
            >
              Create Note
            </button>
            <button
              onClick={() => navigate("./")}
              className=" bg-[#f5f7f8] px-[30px] w-fit h-[40px] flex items-center rounded-md  "
            >
              Go back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
