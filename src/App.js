// ------------------ practick ------------//

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId/:username" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;

// --------------классная работа----------------------//

// import {
//   Routes,
//   Route,
//   Link,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Profile from "./pages/profile";

// function App() {
// const navigate = useNavigate();

// function handleClick() {
//   navigate("/about");
// }
//  const location = useLocation();

// const { pathname } = useLocation();

// if (pathname === "/") {
//   document.title = "Home";
// } else {
//   document.title = "About";
// }

// return (
//   <div className="App">
{
  /* <div
        onClick={handleClick}
        style={{
          position: "absolute",
          width: "250px",
          height: "75px",
          right: "0",
          border: "1px solid green",
          borderRadius: "12px",
          top: "20px",
          boxShadow: "1px 2px 10px grey",
        }}
      >
        notification
      </div> */
}
{
  /* <nav>
        <Link to="/">Home</Link>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
        >
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App; */
}
