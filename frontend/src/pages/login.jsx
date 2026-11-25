import { useState } from 'react'
function Login(){
     const [count, setCount] = useState(0)
      const [email, setEmail] = useState('')
      const [pass, setPass] = useState('')
      function print(e){
        e.preventDefault()
        console.log(email,pass)
      }
    return(
    <div>
    <div>
    <form>
      Email :  <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    </form>
    </div>
    <div>
    <form>
      Password :  <input type="password" placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)}></input>
    </form>
    </div><br></br>
    <button type="Submit" onClick={(e)=>print(e)}>Login</button>
    </div>
    )
}
export default Login