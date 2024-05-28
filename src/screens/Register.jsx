import { useState } from "react"
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { register } from "../services/admin";

export default function Register(){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate();


    async function onRegister(){
        if(firstName.length == 0 ){
            toast.error('Enter Firstname')
        }
        else if(lastName.length == 0 ){
            toast.error('Enter LastName')
        }
        else if(email.length == 0 ){
            toast.error('Enter email')
        }
        else if(password.length == 0 ){
            toast.error('Enter password')
        }
        else if(confirmPassword.length == 0 ){
            toast.error('Confirm your password')
        }
        else if(password != confirmPassword){
           alert('Passwords do not match')
        }

        else{
            //calling the resgister api

              const res = await register(firstName,lastName,email,password)
              if(res.status == 'success'){
                toast.success('succesfully registered admin user')
                navigate('/login')

              }
              else {
                toast.error(res.error)
              }
        }
    }



    return(
        <div>
            <h2 className="page-header">Register</h2>
            <div className="row">
                <div className="col"></div>
                <div className="col">

                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="">First Name</label>
                            <input type="text" onChange={(e)=>{
                                setFirstName(e.target.value)
                            }} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Last Name</label>
                            <input type="text" onChange={(e)=>{
                                setLastName(e.target.value)
                            }} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input type="email" onChange={(e)=>{
                                setEmail(e.target.value)
                            }} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Password</label>
                            <input type="password" onChange={(ev)=>{
                                setPassword(ev.target.value)

                            }}  className="form-control"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" onChange={(ev)=>{
                                setConfirmPassword(ev.target.value)
                                
                            }} className="form-control"/>


                        </div>

                        <div className="mb-3">
                            <div>Already have an account? <Link to='/login' >Login here </Link>
                            </div>
                            <button onClick={onRegister} className="btn btn-success mt-2">Register</button>
                           
                        </div>
                    </div>
                </div>
                <div className="col"></div>


            </div>
           
        </div>
    )
}