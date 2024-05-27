import { useState } from "react"
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'



export default function Login(){

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');


    function onLogin(){

        console.log('inside');
        if(email.length ==  0){

            toast.error('Please enter email')

           
           
            
        }
        else if(password.length === 0){

            toast.error('Please enter password')
            
        }
        else{
            //call login api
        }
    }
 



    return(
        <div>
            <h2 className="page-header">Login</h2>
            <div className="row">

                <div className="col"></div>

                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input 
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                             type="email" className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input

                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            
                            type="password" className="form-control" />
                        </div>
                        
                        <div>
                            <div>Don't have an account? <Link to='/register'>Register here</Link> </div>
                            <button onClick={onLogin} className="btn btn-success mt-2">Login</button>
                        </div>
                   
                    

                </div>

                </div>



                <div className="col"></div>
            </div>
        </div>
    )
}