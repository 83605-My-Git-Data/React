import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link ,useNavigate,useLocation} from "react-router-dom";
import { addProperty, getDetailsOfProperty, updateProperty } from "../services/property";
import Amnetites from "../components/amneties";
import { toast } from 'react-toastify';

export default function PropertyDetails(){

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

    const location = useLocation();

 

    useEffect(()=>{
       
        onLoad(location.state.id);
    },[])

     async function onLoad(id){

       

            const data =  await getDetailsOfProperty(id)
            if(data.status == 'success'){
                const property = data.data
                console.log("your property : "+property);
               
                // console.log("Insideeeeeeee: "+property.title);

                // console.log("add: "+data.data.address);

                setTitle(property.title)
                setDetails(property.details);
                setGuests(property.guests);
                setBathRooms(property.bathrooms);
                setBedRooms(property.bedrooms)
                setOwnerName(property.ownerName);
                setContactNo(property.contactNo)
                setAddress(data.data.address)
                setRent(property.rent)
                setBeds(property.beds)
                setIsLakeView(property.isLakeView);
                setIsWifi(property.isWifi)
                setIsMiniBar(property.isMiniBar);
                setIsParking(property.isParking);
                setIsAc(property.isAC);
                setIsBreakFast(property.isBreakfast);
                setIsTv(property.isTV);
                setImage(property.profileImage);


               

                

           }

  

  }


           async function saveIt(){
              const result = await  updateProperty(title,
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
                    image,
                    location.state.id
                  )

                  if(result.status == 'success'){
                    toast.success('updated property')
                    navigate('/properties')
                  }
                  else{
                    toast.error(result.error)
                  }
            }

            

  

  return(
    <div>
        <Navbar/>
        <h2 className="page-header">Property Details</h2>

        <div className="form">
                <div className="row">
                    <div className="col">
                        <div>
                            <label htmlFor="">Title</label>
                            <input onChange={(ev)=>{
                                setTitle(ev.target.value)
                            }} type="text" className="form-control" value={title} />
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="">Contact Name</label>
                        <input type="text" onChange={(ev)=>{
                            setOwnerName(ev.target.value)
                        }} className="form-control" value={ownerName} />
                    </div>
                    <div className="col">
                        <label htmlFor="">Contact Number</label>
                        <input type="text" onChange={(e)=>{
                            setContactNo(e.target.value)
                        }} className="form-control" value={contactNo} />

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div>
                            <label htmlFor=""># Guests</label>
                            <input type="text" onChange={(e)=>{
                                setGuests(e.target.value)
                            }} className="form-control"  value={guests}/>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <label htmlFor=""># Bedrooms</label>
                            <input type="text"  onChange={(e)=>{
                                setBedRooms(e.target.value)
                            }} className="form-control" value={bedrooms}/>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor=""># Beds</label>
                            <input type="text" onChange={(e)=>{
                                setBeds(e.target.value)
                            }} className="form-control" value={beds} />
                        </div>
                    </div>
                </div>

                <div className="row">

                <div className="col">
                        <div>
                            <label htmlFor="">Address</label>
                            <textarea type="text"  className="form-control" 
                            rows={3} value={address}/>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor="">Details</label>
                            <textarea type="text" onChange={(e)=>{
                                setDetails(e.target.value)
                            }} className="form-control" 
                            rows={3} value={details}/>
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
                            value={bathrooms}/>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor="">Rent</label>
                            <input type="text" onChange={(e)=>{
                                setRent(e.target.value)
                            }} className="form-control" value={rent}
                            />
                        </div>
                    </div>


                </div>

                <h3>Amnetites</h3>

                <div className="row mb-3">

                    <div className="row">
                        <div className="col">
                            <Amnetites title='lake-view'
                            onChange={(status)=> setIsLakeView(status) }
                            shouldIUpdate = {isLakeView}
                            icon='bi-water'/>

                            <Amnetites
                            onChange={(status) => setIsTv(status)}
                                title='TV'
                                icon='bi-tv'
                                shouldIUpdate = {isTV}
                            />
                            <Amnetites
                                onChange={(status) => setIsAc(status)}
                                title='AC'
                                icon='bi-activity'
                                shouldIUpdate = {isAc}
                            />
                            <Amnetites
                                onChange={(status) => setIsWifi(status)}
                                title='WiFi'
                                
                                icon='bi-wifi'
                                shouldIUpdate = {isWifi}
                            />
                            <Amnetites
                                onChange={(status) => setIsMiniBar(status)}
                                title='Minibar'
                                icon='bi-droplet-half'
                                shouldIUpdate = {isMiniBar}
                            />
                            <Amnetites
                                onChange={(status) => setIsBreakFast(status)}
                                title='Breakfast'
                                icon='bi-egg-fried'
                                shouldIUpdate={isBreakfast}
                            />
                            <Amnetites
                                onChange={(status) => setIsParking(status)}
                                title='Parking'
                                icon='bi-p-circle'
                                shouldIUpdate = {isParking}
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
          <button  onClick={saveIt}  className='btn btn-success me-2' >
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


