import { useEffect, useState } from "react"
import Navbar from "../components/navbar";
import { Link ,useNavigate } from "react-router-dom";
import { getProperty } from "../services/property";
import { config } from "../services/config";

export default function Properties(){

    const[properties,setProperties] = useState([]);
    
    const navigate = useNavigate();

   
    async function loadProperty(){
       const data =  await getProperty();
       if(data.status == 'success'){
        setProperties(data.data)
       }
    }

    function onDelete(index){
        properties.splice(index,1);
        setProperties([...properties]);

    }

    function onDetails(index){
        navigate('/property-details',{ state: { id: index } })
    }

    useEffect(()=>{
        loadProperty()
    },[])

    return(
        <div>
            <Navbar></Navbar>

           <h2 className="page-header">Properties</h2>

           <Link to='add-property' className="btn btn-primary" > Add Property</Link>

           <table className="table table-striped mt-5">
            <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th>Title</th>
                    <th>Address</th>
                    <th>Owner Name</th>
                    <th>Contact Number</th>
                    <th>Rent</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {properties.map((property,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>
                                <img src={`${config.serverURL}/image/${property.profileImage}`} alt="" style={{width:100,height:100}}/>
                            </td>
                            <td>{property.title}</td>
                            <td>{property.address}</td>
                            <td>{property.ownerName}</td>
                            <td>{property.contactNo}</td>
                            <td>{property.rent}</td>
                            <td>
                                <button onClick={()=>{
                                    onDelete(index);
                                }} className="btn btn-danger  bt-sm me-2">Delete</button>
                                <button onClick={(e)=>{
                                    // console.log(index);

                                    onDetails(index+1)
                                }} className="btn btn-primary bt-sm">Details</button>
                            </td>
                        </tr>
                    )

                })}
            </tbody>
           </table>
           

        </div>
    )
}