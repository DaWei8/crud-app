import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className=" pe-5 container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Blogga
        </Link>

        <div className="" id="navbarNav">
          <ul className=" d-flex gap-5 ">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/home"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login | Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
