import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        setIsAuthenticated(true)
        result.data === "Success" ? navigate("/home") : console.log("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-row justify-center  items-center h-[85vh] rounded-[10px] mt-[10px] bg-[#f2f5f7] ">
      <div className="bg-white p-[20px] rounded w-[50%]  min-w-[300px] ">
        <h3 className=" text-[28px] font-semibold mb-[10px]">Login</h3>
        <form
          className=" flex flex-col gap-[20px] "
          onSubmit={handleSubmit}
          action="POST"
        >
          <div className=" flex flex-col gap-[10px] ">
            <div className=" gap-[5px] flex flex-col ">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                name="email"
                autoComplete="off"
                placeholder="Enter Email"
                className=" pl-[8px] h-[40px] border-[#e4e4e4] border-solid border-[1px] rounded  "
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className=" gap-[5px] flex flex-col ">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                name="password"
                autoComplete="off"
                placeholder="Enter Password"
                className=" pl-[8px] h-[40px] border-[#e4e4e4] border-solid border-[1px] rounded  "
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-[#fff] px-[30px] justify-center h-[40px] flex items-center rounded-md bg-[#1e9daf]"
          >
            Login
          </button>
          <p>Don&#39;t Have an Account</p>

          <Link
            to={"/signup"}
            className=" border-[#e4e4e4] border-solid border-[1px] px-[30px] justify-center h-[40px] flex items-center rounded-md"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}
