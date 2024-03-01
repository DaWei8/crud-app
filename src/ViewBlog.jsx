import { Link, useLocation, useNavigate } from "react-router-dom";
import backButton from "./assets/left_icon.svg";
import coverImage from "./assets/cover-image.jpeg";
import { useAuth } from "./auth/AuthContext";

export default function ViewBlog() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className=" flex flex-col justify-center items-centerh-[85vh] rounded-[10px] mt-[10px] bg-[#f2f5f7] ">
      <div className=" w-[90%] min-w-[350px] mx-auto rounded-[10px] flex  flex-col min-h-[80dvh] pt-[30px] px-[50px] mt-[80px] ">
        <div className=" flex justify-between ">
          <Link
            to={"/blogs"}
            className=" flex gap-[8px] text-[16pxs] items-center justify-center "
          >
            <img src={backButton} alt="back button" />
            Back
          </Link>
          {isAuthenticated === true ? (
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
          ) : (
            ""
          )}
        </div>
        <div className=" flex flex-col pt-[20px] ">
          <img
            src={coverImage}
            className=" w-[100%] h-[400px] object-cover rounded-[10px] "
            alt="note cover"
          />
          <h1 className=" text-[32px] font-semibold ">
            {location.state.title}
          </h1>
          <p>{location.state.content}</p>
        </div>
      </div>
    </div>
  );
}
