import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div  className=' mx-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="appointment" element={<Appointment></Appointment>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
