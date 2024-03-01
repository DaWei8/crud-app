import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  redirect,
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Blogs from "./Blogs";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";
import Signup from "./Signup";
import Login from "./Login";
import DeleteBlog from "./DeleteBlog";
import ViewBlog from "./ViewBlog";
import { useAuth } from "./auth/AuthContext";
import Logout from "./Logout";
// import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App max-w-[1024px] mx-auto ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/*" element={<ViewBlog />} />
          {isAuthenticated === true ? (
            <Route 
            path="/createblog" element={<CreateBlog />} />
          ) : (
            <Route path="/createblog" element={<Login />} />
          )}
          <Route path="/blogs/editblog" element={<EditBlog />} />
          <Route path="/blogs/deleteblog" element={<DeleteBlog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/logout" element={<Logout />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// const { isAuthenticated} = AuthContextProvider();

/* <Router>
        {isAuthenticated === true ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/*" element={<ViewBlog />} />
              <Route path="/createblog" component={<CreateBlog />} />
              <Route path="/blogs/editblog" component={<EditBlog />} />
              <Route path="/blogs/deleteblog" component={<DeleteBlog />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/*" element={<ViewBlog />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        )}
      </Router> */
