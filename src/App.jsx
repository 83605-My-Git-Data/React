import logo from './logo.svg';
import './App.css';
import Login from './screens/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from 'react-router-dom'
import Register from './screens/Register';
import Navbar from './components/navbar';
import Home from './screens/Home';
import AddProperty from './screens/AddProperty';
import Properties from './screens/Properties';
import PropertyDetails from './screens/PropertyDetails';
function App() {
  return (
   <div className='container'>

    <Routes>
      <Route path='' element={<Login/>} ></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/properties/add-property' element={<AddProperty/>}></Route>
      <Route path='/properties' element={<Properties/>}></Route>
      <Route path='/property-details' element={<PropertyDetails/>}></Route>
      
    </Routes>

    

   
    
    

    <ToastContainer/>
   </div>
  );
}

export default App;
