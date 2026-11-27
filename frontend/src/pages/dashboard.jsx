import { useState } from "react";
import header from "../assets/header.jpg"
import { useLocation, Link, Outlet } from "react-router-dom";
function Dashboard() {
    const location=useLocation();
    const [userdata,setUserdata]=useState("")
    function display(){
        setUserdata(location.state)
        console.log(userdata)
    }
    return ( 
        <div className="flex flex-col ">
        <img src={header} alt="A clear description of the image" className='block mx-auto w-1/' />       
        <nav className="bg-slate-800 text-white  shadow-md">
        <div className="flex justify-center gap-8">
            <Link to="home">HOME</Link>
            <Link to="search">SEARCH</Link>
            <Link to="publish">PUBLISH</Link>
            <Link to="settings">SETTINGS</Link>
        </div>
        </nav>
        <Outlet/>
        {/*<div className="flex flex-col justify-center items-center">
        <button className="bg-blue-600 text-white font-medium px-40 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800  transition-colors cursor-pointer" 
            onClick={display}>Displayy</button></div>*/}
        </div>
     );
}
export default Dashboard;