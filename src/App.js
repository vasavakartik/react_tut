import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {Navbar} from './pages/Navbar';
import { SubHome } from './components/SubHome';
import {Routes,Route} from 'react-router-dom'
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { ContactUsDetail } from './pages/ContactUsDetail';
import { Electronics } from './pages/Electronics';
import { Fashion } from './pages/Fashion';
import { Groc } from './pages/Groc';
import { SimpleForm } from './components/SimpleForm';
import { EmployeeRagistration } from './components/EmployeeRagistration';
import { ApiDemo } from './api/ApiDemo';


import { Apidemo3 } from './api/Apidemo3';
import { Apidemo2 } from './api/Apidemo2';
import { FormDemo2 } from './api/FormDemo2';
import { FileUpload } from './api/FileUpload';
import { SelectDemo } from './components/SelectDemo';
import { Login } from './components/Login';
import {Profile} from './components/Profile'
import { Deletedate } from './api/Deletedate';
import { Updatedata } from './api/Updatedata';


function App() {

  var title = "whatever"

  return (
    <div>
     
      {/* <SelectDemo/> */}
      {/* <FormDemo2/>
      <FileUpload/> */}
      {/* <Apidemo3/> */}
      {/* <Apidemo2/> */}
    
    
      {/* <ApiDemo/> */}
        {/* <EmployeeRagistration/> */}

       { <  Navbar/>}

 <Routes>
  <Route path ="/home" element = {<Home/>}></Route>
  <Route path ="/aboutus" element = {<AboutUs/>}></Route>
  <Route path ="/contactus" element = {<ContactUs/>}></Route>
  <Route path ="/contactus/:id" element = {<ContactUsDetail/>}></Route>
  <Route path ="/eletronics" element = {<Electronics/>}></Route>
  <Route path ="/fashion" element = {<Fashion/>}></Route>
  <Route path ="/g" element = {<Groc/>}></Route>
  <Route path ="/simpleform" element = {<SimpleForm/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/table' element={<Apidemo3/>}></Route>
  <Route path='/crud' element={<Deletedate/>}></Route>
  <Route path='/update' element={<Updatedata/>}></Route>

 
</Routes>
{/* <Login/>  */}

    </div>
  );
}

export default App;
