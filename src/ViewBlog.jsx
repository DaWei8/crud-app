
import { Link, useLocation, useNavigate } from "react-router-dom";
import backButton from "./assets/left_icon.svg";

export default function ViewBlog() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col justify-center p-[30px] bg-white w-[100vw] " >
    <div className=" max-w-[1024px] rounded-[10px] flex flex-auto flex-col min-h-[80dvh] pt-[30px] px-[50px] mt-[80px] bg-[#f5f5f5] ">
      <div className=" flex justify-between " >
        <Link to={"/blogs"} className=" flex gap-[8px] text-[16pxs] items-center justify-center " >
          <img src={backButton} alt="back button" />
          Back
        </Link>
        <div className=" flex gap-[20px] justify-between items-center ">
          <button
            onClick={() => {
              navigate("/blogs/editblog", {
                state: {
                  id: location.state.id.toString(),
                  title: location.state.title,
                  content: location.state.content,
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
                  id: location.state.id.toString(),
                  title: location.state.title,
                  content: location.state.content,
                },
              })
            }
            className="bg-[#d13866] text-[#fff] h-[30px] px-[20px] rounded "
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <h1 className=" text-[32px] font-semibold ">{location.state.title}</h1>
        <p>{location.state.content}</p>
      </div>
    </div>
    </div>
  );
}
