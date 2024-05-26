import logo from './logo.svg';
import './App.css';
import Login from './screens/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div className='container'>
    hi there

    <Login/>

    <ToastContainer/>
   </div>
  );
}

export default App;
