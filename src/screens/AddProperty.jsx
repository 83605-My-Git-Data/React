

import { useState } from "react";
import Navbar from "../components/navbar";
import Amnetites from "../components/amneties";

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
    // const[profileImage,setProfileImage] = useState(undefined);


    return(
        <div>
            <Navbar/>
            <div className="page-header">Add Property</div>

            <div className="form">
                <div className="row">
                    <div className="col">
                        <div>
                            <label htmlFor="">Title</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="">Contact Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <label htmlFor="">Contact Number</label>
                        <input type="text" className="form-control" />

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div>
                            <label htmlFor=""># Guests</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <label htmlFor=""># Bedrooms</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor=""># Beds</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">

                <div className="col">
                        <div>
                            <label htmlFor="">Address</label>
                            <textarea type="text" className="form-control" 
                            rows={3} />
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor="">Details</label>
                            <textarea type="text" className="form-control" 
                            rows={3}/>
                        </div>
                    </div>


                </div>


                <div className="row">

                <div className="col">
                        <div>
                            <label htmlFor=""># Bathrooms</label>
                            <input type="text" className="form-control" 
                             />
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <label htmlFor="">Rent</label>
                            <input type="text" className="form-control" 
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

            </div>
        </div>
    )


 
    
}