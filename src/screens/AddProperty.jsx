

import { useState } from "react";
import Navbar from "../components/navbar";
import Amnetites from "../components/amneties";
import { Link ,useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import { addProperty } from "../services/property";

export default function AddProperty(){
    const[title,setTitle] = useState('');//
    const[details,setDetails] = useState('');//
    const[address,setAddress] = useState('');//
    const[contactNo,setContactNo] = useState('');//
    const[ownerName,setOwnerName] = useState('');//
    const[isLakeView,setIsLakeView] = useState(false);
    const[isTV,setIsTv] = useState(false);
    const[isAc,setIsAc] = useState(false);
    const[isWifi,setIsWifi] = useState(false);
    const[isMiniBar,setIsMiniBar] = useState(false);
    const[isBreakfast,setIsBreakFast] = useState(false);
    const[isParking,setIsParking]  = useState(false);
    const[guests,setGuests] = useState(false);//
    const[bedrooms,setBedRooms] = useState(false);//
    const[beds,setBeds] = useState(0);//
    const[bathrooms,setBathRooms] = useState(0);//
    const[rent,setRent] = useState(0);//

    const[image,setImage] = useState(undefined);


    const navigate = useNavigate();

    async function saveThis(){
        if(title.length == 0){
            toast.warn('Enter title');
        }
        else if(contactNo.length == 0){
            toast.warn('Enter contact No');
        }
        else if(ownerName.length == 0){
            toast.warn('Enter owner name');
        }
        else{
            const result = await addProperty(
                title,
                contactNo,
                ownerName,
                details,
                address,
                guests,
                bedrooms,
                bathrooms,
                beds,
                rent,
                isLakeView,
                isTV,
                isAc,
                isWifi,
                isMiniBar,
                isBreakfast,
                isParking,
                image
              )

              if(result.status == 'success'){
                toast.success('Added property')
                navigate('/properties')
                
              }
              else{
                toast.error(result.error);
              }
        }
    }
   


    return(
        <div>
            <Navbar/>
            <div className="page-header">Add Property</div>

            <div className="form">
                <div className="row">
                    <div className="col">
                        <div>
                            <label htmlFor="">Title</label>
                            <input onChange={(ev)=>{
                                setTitle(ev.target.value)
                            }} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="">Contact Name</label>
                        <input type="text" onChange={(ev)=>{
                            setOwnerName(ev.target.value)
                        }} className="form-control" />
                    </div>
                    <div className="col">
                        <label htmlFor="">Contact Number</label>
                        <input type="text" onChange={(e)=>{
                            setContactNo(e.target.value)
                        }} className="form-control" />

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div>
                            <label htmlFor=""># Guests</label>
                            <input type="text" onChange={(e)=>{
                                setGuests(e.target.value)
                            }} className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <label htmlFor=""># Bedrooms</label>
                            <input type="text"  onChange={(e)=>{
                                setBedRooms(e.target.value)
                            }} className="form-control" />
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor=""># Beds</label>
                            <input type="text" onChange={(e)=>{
                                setBeds(e.target.value)
                            }} className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">

                <div className="col">
                        <div>
                            <label htmlFor="">Address</label>
                            <textarea type="text" onChange={(e)=>{
                                setAddress(e.target.value)
                            }} className="form-control" 
                            rows={3} />
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor="">Details</label>
                            <textarea type="text" onChange={(e)=>{
                                setDetails(e.target.value)
                            }} className="form-control" 
                            rows={3}/>
                        </div>
                    </div>


                </div>


                <div className="row">

                <div className="col">
                        <div>
                            <label htmlFor=""># Bathrooms</label>
                            <input type="text" onChange={(e)=>{
                                setBathRooms(e.target.value)
                            }} className="form-control" 
                             />
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor="">Rent</label>
                            <input type="text" onChange={(e)=>{
                                setRent(e.target.value)
                            }} className="form-control" 
                            />
                        </div>
                    </div>


                </div>

                <h3>Amnetites</h3>

                <div className="row mb-3">

                    <div className="row">
                        <div className="col">
                            <Amnetites title='lake-view'
                            icon='bi-water'/>

                            <Amnetites
                            onChange={(status) => setIsTv(status)}
                                title='TV'
                                icon='bi-tv'
                            />
                            <Amnetites
                                onChange={(status) => setIsAc(status)}
                                title='AC'
                                icon='bi-activity'
                            />
                            <Amnetites
                                onChange={(status) => setIsWifi(status)}
                                title='WiFi'
                                icon='bi-wifi'
                            />
                            <Amnetites
                                onChange={(status) => setIsMiniBar(status)}
                                title='Minibar'
                                icon='bi-droplet-half'
                            />
                            <Amnetites
                                onChange={(status) => setIsBreakFast(status)}
                                title='Breakfast'
                                icon='bi-egg-fried'
                            />
                            <Amnetites
                                onChange={(status) => setIsParking(status)}
                                title='Parking'
                                icon='bi-p-circle'
                            />

                        </div>
                    </div>
                </div>

                <div className='mb-3'>
          <label htmlFor=''>Image</label>
          <input
            accept='image/*'


           
            type='file'
            className='form-control'
            onChange={(e)=>{
                setImage(e.target.files[0])
            }}
          />
        </div>

        <div className='mb-3'>
          <button  className='btn btn-success me-2' onClick={saveThis}>
            Save 
          </button>
          <Link to='/properties' className='btn btn-danger'>
            Cancel
          </Link>
        </div>

            </div>
        </div>
    )


 
    
}