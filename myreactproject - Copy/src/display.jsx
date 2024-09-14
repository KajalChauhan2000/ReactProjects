import { useState, useEffect } from "react";
import axios from "axios";


const Display=()=>{


    const [mydata, setMydata]=useState([]);
    const loadData=()=>
    {
        let url = "http://localhost:3000/students";


        axios.get(url).then((res)=>{


            setMydata(res.data);
        });
    }

    
    useEffect(()=>{
         loadData();
    },[]);


    const ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    });
 
    return (
      <>
       <h1>Display Employee Records</h1>
       <table width="500" align="center" bgcolor="pink" border="1">
        <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
        </tr>
        {ans}
       </table>
      </>
    )
  }
  export default Display;


