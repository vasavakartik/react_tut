import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashbord } from "./Admin/Dashbord";
import { Login } from "./Login/Login";
import { Lock } from "./Login/Lock";
import { Adduser } from "./User/Adduser";




function App() {
  return (
    <div className="wrapper">
   
      <Routes>
       
         <Route path="/" element={<Lock/>}></Route>
        <Route path="/*" element={<Dashbord />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/adduser" element={<Adduser/>}></Route> 
      </Routes>

    </div>
  );
}

export default App;
