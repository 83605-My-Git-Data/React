import { useState } from "react"
import { Link } from "react-router-dom";

export default function Register(){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')



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
                            <button className="btn btn-success mt-2">Register</button>
                           
                        </div>
                    </div>
                </div>
                <div className="col"></div>


            </div>
           
        </div>
    )
}