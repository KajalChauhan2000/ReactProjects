import { useState } from "react";
import axios from "axios";

const Search=()=>
{

    const [rollno, setRollno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit=()=>{

        let url = `http://localhost:3000/students/?rollno=${rollno}`;

       axios.get(url).then((res)=>{
        setMydata(res.data);
       })
    }

    const ans = mydata.map((key)=>{
        return(
            <>
            <h1>Name : {key.name}</h1>
            <h1>Rollno : {key.rollno}</h1>
            <h1>City : {key.city}</h1>
            <h1>Total Tution Fees : {key.fees}</h1>
            </>
        )
    })

  return(
    <>
    <h1>Search Employee Record</h1>
    Enter Rollno : 
    <input type="text" value={rollno} onChange={(e)=>{setRollno(e.target.value)}} />
    <button onClick={handleSubmit}>Search Record</button>
    </>
  )
}
export default Search;