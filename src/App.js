import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Blogs from "./Blogs";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <div className="App">
     <Router>
       <NavBar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/blogs" element={<Blogs />} />
         <Route path="/createblog" element={<CreateBlog />} />
         <Route path="/createblog" element={<EditBlog />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
