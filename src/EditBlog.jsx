import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditBlog() {
  const location = useLocation();
  const [title, setTitle] = useState(location.state.title);
  const [content, setContent] = useState(location.state.content);
  const navigate = useNavigate();

  const handleSaveBlog = async (id) => {
    if (title !== "" && content !== "") {
      try {
        const response = await axios
          .put(`http://localhost:3001/editblog/${location.state.id}`, {
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
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    if (title === location.state.title && content === location.state.content) {
      alert("No changes have been made").then(() => navigate(-1));
    }
    if (title === "" || content === "") {
      alert("Title or content is required");
    }
  };

  useEffect(() => {
    console.log(location.state.id);
    console.log(
      "Title:",
      location.state.title,
      "\nContent: ",
      location.state.content
    );
    // console.log(location.state.content);
  });

  return (
    <div className="flex flex-row justify-center  items-center h-[85vh] rounded-[10px] mt-[10px] bg-[#f2f5f7] ">
      <div className="bg-white p-[20px] rounded w-[50%]  min-w-[300px] ">
        <h3 className=" text-[28px] font-semibold mb-[10px] ">Edit Note</h3>
        <form
          onSubmit={handleSaveBlog}
          className=" flex flex-col gap-[20px] "
          method="get"
          action="/blogs"
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
                className=" pl-[8px] h-[40px] border-[#e4e4e4] border-solid border-[1px] rounded  "
                id="blogtitle"
                defaultValue={location.state.title}
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
                defaultValue={location.state.content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className=" mt-auto flex justify-between items-center ">
            <button
              type="submit"
              className="text-[#fff] px-[30px] w-fit h-[40px] flex items-center rounded-md bg-[#1e9daf] "
            >
              Save Changes
            </button>
            <button onClick={() => navigate(-1)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
