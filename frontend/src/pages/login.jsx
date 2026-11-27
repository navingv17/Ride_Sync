import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import car from "../assets/car.jpg"
function Login(){
    const location=useLocation();
      const [logindata,setLogindata]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate();
    function onSubmit(e){
        e.preventDefault()
        const userdata=location.state  
        console.log(userdata)
        console.log(logindata)       
        if(userdata.email===logindata.email && userdata.password===logindata.password){  
        alert("LOGIN SUCCESSFUL!")
        navigate("/dashboard/home",{state:logindata})}
        else{
            alert("INVALID CREDENTIALS!")
        }
}    
    function handleChange(e){
        setLogindata({
            ...logindata,[e.target.name]:e.target.value
        });
    }
    return ( 
        <div>
        <div className='text-white bg-gradient-to-r from-amber-500 to-pink-500 text-2xl font-bold flex justify-center'>Welcome to RideSync!</div>
        <br></br>
        <img src={car} alt="A clear description of the image" className='block mx-auto w-1/' /><br></br>   
        <form onSubmit={onSubmit}>
          <br></br><div className="flex flex-col items-center space-y-5 border border-gray-300 rounded-lg p-4 w-fit mx-auto bg-gray-50">           
            <div>Email :  <input  name="email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type="email" placeholder="Enter email id" onChange={handleChange}/></div>
            <div>Passsword :  <input name="password"className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type="password" placeholder="Enter password" onChange={handleChange}/></div>
            <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800  transition-colors cursor-pointer" 
            type="Submit">Login</button>
            </div>
        </form><br></br>
        <p className="text-center">Don't have an account?<Link className="text-blue-700"to="/register">Register</Link></p>
        </div>
     );
}
export default Login



