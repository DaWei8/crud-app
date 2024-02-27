import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


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
         <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
