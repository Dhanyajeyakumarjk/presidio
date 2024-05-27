
import './App.css';
import Login from './Components/Login';

import Sigin from './Components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Buyer from './Components/Buyer';
import Seller from './Components/Seller';
import HomePage from './Components/HomePage';


function App() {
  return (
    <div>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signin' element={<Sigin/>}></Route>
       <Route path='/seller' element={<Seller/>}></Route>
      <Route path='/buyer' element={<Buyer/>}></Route>
      <Route path='/homepage' element={<HomePage/>}></Route>
     </Routes>
     
     </BrowserRouter> 
    </div>
  );
}

export default App;
