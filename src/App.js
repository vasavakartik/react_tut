import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashbord } from "./Admin/Dashbord";
import { Login } from "./Login/Login";


function App() {
  return (
    <div className="wrapper">
   
      <Routes>
      
        <Route path="/*" element={<Dashbord />}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
