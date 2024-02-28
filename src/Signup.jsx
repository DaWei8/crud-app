// import { useState } from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-row justify-center  items-center bg-[#edeff0] h-[100vh] ">
      <div className="bg-white p-[20px] rounded w-[50%]  min-w-[300px] ">
        <h3 className=" text-[28px] font-semibold mb-[10px]">Sign up</h3>
        <form
          className=" flex flex-col gap-[20px] "
          onSubmit={handleSubmit}
          action="POST"
        >
          <div className=" flex flex-col gap-[10px] ">
            <div className=" gap-[5px] flex flex-col ">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                name="name"
                autoComplete="off"
                placeholder="Enter Name"
                className=" pl-[8px] h-[40px] border-[#e4e4e4] border-solid border-[1px] rounded  "
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
          <button
            type="submit"
            className="text-[#fff] px-[30px] justify-center h-[40px] flex items-center rounded-md bg-[#1e9daf]"
          >
            Sign up
          </button>
          <p>Already Have an Account</p>
          <Link
            to={"/login"}
            className="border-[#e4e4e4] border-solid border-[1px] px-[30px] justify-center h-[40px] flex items-center rounded-mdF "
          >
            <> Login</>
          </Link>
        </form>
      </div>
    </div>
  );
}
