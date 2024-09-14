import { useState } from "react";
import axios from "axios";


const Insert=()=>{


const [input, setInput] = useState({});


  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values,[name]:value}));
  }


  const handleSubmit=()=>{
    let url = "http://localhost:3000/students";
    axios.post(url, input).then((res)=>{
    alert("Data Successfully Save!!!");
   
  })
}

    return(
    <>
       <h1>Insert Employee Records</h1>
        Enter rollno : <input type="text" name="rollno" onChange={handleInput}/>
       <br/>
       Enter Name : <input type="text" name="name" onChange={handleInput}/>
       <br/>
       Enter City : <input type="text" name="city" onChange={handleInput}/>
       <br/>
       Enter Fees : <input type="text" name="fees" onChange={handleInput}/>
       <br/>
       <button onClick={handleSubmit}> Data Save!!!</button>
      </>
    )
  }    
export default Insert;
