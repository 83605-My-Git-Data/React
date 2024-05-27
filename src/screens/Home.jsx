import DashBoardItem from "../components/dashboardItem";
import Navbar from "../components/navbar";

export default function Home(){
    return(
        <div>
            <Navbar/>
            <h2 className="page-header">Home</h2>
            <div className="row mt-5">
                <div className="col">
                    <DashBoardItem title='Users' value='100k' />
                </div>
                <div className="col">
                    <DashBoardItem title='Properties' value='100k' />
                </div>
                <div className="col">
                    <DashBoardItem title='Bookings' value='10k' />
                </div>
                <div className="col">
                    <DashBoardItem title='REvenue' value='$100b' />
                </div>

            </div>
        </div>
    )
}