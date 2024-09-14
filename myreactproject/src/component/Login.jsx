import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login=()=>{

  const [userid, setUserId]=useState("");
  const[password , setPassword]=useState("");

  const navigate = useNavigate();

  const handleSubmit=()=>{

    let url = `http://localhost:3000/students/?userid=${userid}`
    axios.get(url).then((res)=>{
      if(res.data.length!=0)
        {
          if(res.data[0].password===password)
            {
              localStorage.setItem("uname", res.data[0].name);
              localStorage.setItem("email" , res.data[0].email);

              navigate("/DashBoard");
            }
            else
            {
              alert("Invalid Password!!");
            }
        }
        else{
          alert("Invalid User Id");
        }
    });
  }
    
return(
        <>
          <h1>User Login</h1>
           Enter User Id : <input type="text" value={userid} onChange={(e)=>{setUserId(e.target.value)}} /><br/>
           Enter Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
           <button onClick={handleSubmit}>Login Now!</button>
        </>

    )
}

export default Login;