import { loginSchema } from "../components/formSchema/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(loginSchema)
    })
    const navigate=useNavigate();
function onSubmit(data){
    console.log(data)
    alert("Login successful!")
    navigate("../dashboard")
}    
    return ( 
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br></br><div className="flex flex-col items-center space-y-5 border border-gray-300 rounded-lg p-4 w-fit mx-auto bg-gray-50">           
            <div>Email :  <input className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type="email" placeholder="Enter email id" {...register("email")}/></div>
            <p>{errors.email?.message}</p>
            <div>Passsword :  <input className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type="password" placeholder="Enter password" {...register("password")}/></div>
            <p>{errors.password?.message}</p>
            <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800  transition-colors cursor-pointer" 
            type="Submit">Login</button>
            </div>
        </form>
        </div>
     );
}
export default Login
{/*<div>Email :<input className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type="text" placeholder="Enter your name" {...register("name")}/></div>
            <p>{errors.name?.message}</p>*/}


