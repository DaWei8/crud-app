import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className=" sticky top-0  z-40 bg-[#1e9daf] min-w-[320px]  text-[#fff] h-[80px] flex px-[20px] justify-center w-[100vw] flex-auto flex-row items-center ">
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

            <Link className="flex justify-center items-center  " to="/login">
              Login | Register
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
