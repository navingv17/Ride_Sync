import { useState } from "react";
import { useLocation } from "react-router-dom";
function Dashboard() {
    const location=useLocation();
    const [userdata,setUserdata]=useState(" ")
    function display(){
        setUserdata(location.state)
        console.log(userdata)
    }
    return ( 
        <div>
            <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800  transition-colors cursor-pointer" 
            onClick={display}>Displayy</button>
        </div>
     );
}

export default Dashboard;