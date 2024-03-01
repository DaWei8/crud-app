import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import coverImage from "./assets/cover-image.jpeg";
import { useAuth } from "./auth/AuthContext";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  // const splitContent = (content) => {
  //   const newContent = "";
  //   if content is greateer than 80 characters long
  //   change content from 81 till the end to just 3 dots
  //   store new content

  //   return content.split("");
  // };
  useEffect(() => {
    axios
      .get("http://localhost:3001/getblogs")
      .then((allBlogs) => {
        setBlogs(allBlogs.data);
        // console.log(allBlogs.data[0].content.length);
        // console.log(splitContent(allBlogs.data[0].content).length);
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(blogs[0]);
  }, [blogs]);

  return (
    <div className="  w-auto my-[60px] flex flex-col items-center flex-wrap gap-[20px] mx-auto min-h-[85vh] rounded-[10px] mt-[10px] bg-[#f2f5f7] pt-[30px] ">
      <h2 className=" text-[32px] font-semibold ">
        Here are your latest Notes
      </h2>
      <div className=" px-[40px] flex flex-wrap flex-row justify-center md:justify-between gap-[20px]  ">
        {blogs.length !== 0 ? (
          blogs.map((blog, index) => {
            return (
              <div
                className=" bg-white relative shadow-2xl rounded p-[10px] max-h-[250px] min-h-[140px] flex-auto min-w-[250px] max-w-[300px] flex flex-col justify-between "
                key={index}
              >
                <img
                  src={coverImage}
                  className=" w-[100%] h-[100px] object-cover rounded-[10px] "
                  alt="note cover"
                />
                <div
                  role="button"
                  onClick={() => {
                    navigate(`/blogs/${blog.title}`, {
                      state: {
                        id: blog._id.toString(),
                        title: blog.title,
                        content: blog.content,
                      },
                    });
                  }}
                  className=" flex flex-auto absolute top-0 bg-[#00000004] w-[100%] left-0 h-[95px] z-20 "
                ></div>
                <h4 className=" text-[20px] font-semibold ">{blog.title}</h4>
                <p className=" mb-[20px] truncate text-clip text-wrap flex flex-auto ">
                  {blog.content}
                </p>
                {isAuthenticated === true ? (
                  <div className=" mt-auto flex justify-between items-center ">
                    <button
                      onClick={() => {
                        navigate("/blogs/editblog", {
                          state: {
                            id: blog._id.toString(),
                            title: blog.title,
                            content: blog.content,
                          },
                        });
                      }}
                      className=" bg-[#e3e3e3] h-[30px] px-[20px] rounded "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        navigate("/blogs/deleteBlog", {
                          state: {
                            id: blog._id.toString(),
                            title: blog.title,
                            content: blog.content,
                          },
                        })
                      }
                      className="bg-[#d13866] text-[#fff] h-[30px] px-[20px] rounded "
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })
        ) : (
          <div className=" w-50 ">
            <p>You don&#39;t have any notes yet</p>
          </div>
        )}
      </div>

      <Link
        to={"/createblog"}
        className=" text-[#fff] px-[30px] lg:px-[60px] my-[20px] w-fit h-[50px] flex items-center rounded-md bg-[#1e9daf] "
      >
        <p>Create new Note</p>
      </Link>
    </div>
  );
}
