import { useState } from "react";
import axios from "axios";

const Registration=()=>{

    const [input , setInput] = useState({});

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setInput((values)=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let url = "http://localhost:3000/students";
        axios.post(url,input).then((res)=>{
            alert("You are Successfully Registered!!!")
        })
    }
    
    return(
        <>
        <h1>User Registration</h1>
        Enter Name : <input type="text" name="name" value={input.name} onChange={handleInput}/>
        <br/>
        Enter UserId : <input type="text" name="userid" value={input.userid} onChange={handleInput}/>
        <br/>
        Enter Email : <input type="email" name="email" value={input.email} onChange={handleInput}/>
        <br/>
        Enter Password : <input type="password" name="password" value={input.password} onChange={handleInput}/>
        <br/>
        <button onClick={handleSubmit}>Register Now!</button>
        </>
    )
}
export default Registration;