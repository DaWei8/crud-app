// import { useState } from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom"

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
        console.log(result)
       navigate("/login");})
      .catch((err) => console.log(err));
  };

  return (
    <div className=" flex justify-center items-center bg-secondary vh-100 ">
      <div className="bg-white p-3 rounded w-50 ">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} action="POST">
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              name="name"
              autoComplete="off"
              placeholder="Enter Name"
              className="form-control rounded-0"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              className="form-control rounded-0"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
              className="form-control rounded-0"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          <p>Already Have an Account</p>
          <Link
            to={"/login"}
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none "
          >
            <> Login</>
          </Link>
        </form>
      </div>
    </div>
  );
}
