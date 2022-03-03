import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Stringleng } from './components/Stringleng';

function App() {
 
  return (
   <div>Hello All
     <Stringleng/>
     <Navbar/> 
          <Home/>
          
   </div>
   
  );
}

export default App;
