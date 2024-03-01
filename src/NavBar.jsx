import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";
export default function NavBar() {
  const { isAuthenticated} = useAuth();
  const navigate = useNavigate();
  return (
    <nav className=" sticky top-0 mt-[20px] rounded-[10px]  z-40 bg-[#1e9daf] min-w-[320px]  text-[#fff] h-[80px] flex px-[20px] justify-center w-[100%] flex-auto flex-row items-center ">
      <div className=" flex flex-auto justify-between ">
        <Link className=" text-[18px] font-semibold " to={"/"}>
          Notashi
        </Link>
        <div className=" flex ">
          <ul className=" flex gap-[20px] ">
            <Link className=" flex justify-center items-center " to={"/home"}>
              Home
            </Link>

            <Link className="flex justify-center items-center " to="/blogs">
              Notes
            </Link>

            {isAuthenticated === false ? (
              <Link className="flex justify-center items-center  " to="/login">
                Login | Register
              </Link>
            ) : (
              <div
                role="button"
                onClick={() => {
                  navigate("/logout");
                }}
                className="flex justify-center items-center  "
              >
                Logout
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
