import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../_css/Dashboard.css'
import { Route, Routes } from "react-router-dom";

import { AddRole } from "../Role/AddRole";
import { GetRole } from "../Role/GetRole";
import { UpdateRole } from "../Role/UpdateRole";
import { GetUsers } from "../User/GetUsers";
import { User_details } from "../User/User_details";
import { Updateuser } from "../User/Updateuser";
import {Dashbord2} from './Dashbord2'
import { Adduser } from "../User/Adduser";
import Sidebar from "./Sidebar";
import UserSubs from "../Subscription/UserSubs";

export const Dashbord = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Routes>
        <Route path='/dashbord2' element={<Dashbord2/>}></Route>  
        <Route path="/addrole" element={<AddRole />}></Route>
        <Route path="/getrole" element={<GetRole />}></Route>
        <Route path="/getrole/updaterole/:id" element={<UpdateRole />}></Route>
        <Route path='/adduser' element={<Adduser/>}></Route>
        <Route path="/dashbord/user" element={<GetUsers />}></Route>
        <Route path="/userdetails" element={<User_details />}></Route>
        <Route path="/user/updateuser/:userId" element={<Updateuser />}></Route>      
        <Route path="/usersubs" element={<UserSubs/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
};
