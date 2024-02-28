import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        result.data === "Success" ? navigate("/home") : console.log("")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" d-flex justify-content-center align-items-center bg-secondary vh-100 ">
      <div className="bg-white p-3 rounded w-50 ">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} action="POST">
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
            Login
          </button>
          <p>Don&#39;t Have an Account</p>

          <Link
            to={"/register"}
            className=" btn btn-default border w-100 bg-light rounded-0 "
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}
